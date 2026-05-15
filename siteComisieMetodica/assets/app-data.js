(function () {
  "use strict";

  function esc(s) {
    if (s == null || s === "") return "";
    return String(s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function t(key) {
    if (typeof window.cmstT === "function") return window.cmstT(key);
    return key;
  }

  function safeImgUrl(u) {
    if (!u || typeof u !== "string") return "";
    var s = u.trim();
    if (!/^https:\/\//i.test(s)) return "";
    return s;
  }

  function cardImageHtml(url) {
    var s = safeImgUrl(url);
    if (!s) return "";
    return (
      '<div class="card__media"><img src="' +
      esc(s) +
      '" alt="" loading="lazy" decoding="async" /></div>'
    );
  }

  function uploadPhoto(fileInput) {
    var file = fileInput && fileInput.files && fileInput.files[0];
    if (!file) return Promise.resolve(null);
    var fd = new FormData();
    fd.append("file", file);
    return window.CMST_AUTH.apiUpload("/api/upload/image", fd).then(function (r) {
      return r.json().then(function (j) {
        if (!r.ok) throw new Error((j && j.error) || "upload");
        return j.url || null;
      });
    });
  }

  function cardHtml(item, isAward, onDelete) {
    var del =
      onDelete && item.id
        ? '<button type="button" class="btn-icon-delete" data-delete-id="' +
          item.id +
          '" data-delete-kind="' +
          (isAward ? "award" : "event") +
          '" aria-label="' +
          esc(t("teacherDelete")) +
          '">×</button>'
        : "";
    if (isAward) {
      return (
        '<article class="card award-card">' +
        del +
        cardImageHtml(item.image_url) +
        '<span class="badge">' +
        esc(item.award_type || "") +
        (item.year != null ? " · " + esc(String(item.year)) : "") +
        "</span>" +
        '<h3 class="card__title">' +
        esc(item.title) +
        "</h3>" +
        (item.description ? "<p>" + esc(item.description) + "</p>" : "") +
        (item.recipient ? "<p class=\"card__meta\">" + esc(item.recipient) + "</p>" : "") +
        "</article>"
      );
    }
    return (
      '<article class="card">' +
      del +
      cardImageHtml(item.image_url) +
      '<div class="card__meta">' +
      esc(item.event_date) +
      " · " +
      esc(item.status) +
      "</div>" +
      '<h3 class="card__title">' +
      esc(item.title) +
      "</h3>" +
      (item.description ? "<p>" + esc(item.description) + "</p>" : "") +
      "</article>"
    );
  }

  function renderList(el, items, isAward, canDelete) {
    if (!el) return;
    if (!items || !items.length) {
      el.innerHTML = '<p class="empty-hint">' + esc(t(isAward ? "emptyAwards" : "emptyEvents")) + "</p>";
      return;
    }
    el.innerHTML = items
      .map(function (it) {
        return cardHtml(it, isAward, canDelete);
      })
      .join("");
    if (canDelete) {
      el.querySelectorAll("[data-delete-id]").forEach(function (btn) {
        btn.addEventListener("click", function () {
          var id = btn.getAttribute("data-delete-id");
          var kind = btn.getAttribute("data-delete-kind");
          var path = kind === "award" ? "/api/awards/" + id : "/api/events/" + id;
          if (!confirm(t("confirmDelete"))) return;
          window.CMST_AUTH.apiFetch(path, { method: "DELETE" }).then(function (r) {
            if (!r.ok) return alert(t("formError"));
            loadAll();
          });
        });
      });
    }
  }

  function subjectSlug() {
    return document.body.getAttribute("data-subject") || "comisia";
  }

  function loadAll() {
    if (window.CMST_AUTH && window.CMST_AUTH.isPublic()) return;
    var sub = subjectSlug();
    var token = window.CMST_AUTH && window.CMST_AUTH.getToken();
    if (!token) return;

    var user = window.__CMST_USER__;
    var isTeacher = user && user.role === "teacher";

    var qUp = "/api/events?subject=" + encodeURIComponent(sub) + "&status=upcoming";
    var qPast = "/api/events?subject=" + encodeURIComponent(sub) + "&status=past";
    var qAw = "/api/awards?subject=" + encodeURIComponent(sub);

    function parseJson(r) {
      if (!r.ok) throw new Error("api");
      return r.json();
    }

    var fetches = [
      window.CMST_AUTH.apiFetch(qUp).then(parseJson),
      window.CMST_AUTH.apiFetch(qPast).then(parseJson),
      window.CMST_AUTH.apiFetch(qAw).then(parseJson),
    ];

    Promise.all(fetches)
      .then(function (parts) {
        var up = parts[0];
        var past = parts[1];
        var awards = parts[2];
        if (!Array.isArray(up) || !Array.isArray(past) || !Array.isArray(awards)) throw new Error("parse");

        renderList(document.getElementById("db-events-upcoming"), up, false, isTeacher);
        renderList(document.getElementById("db-events-past"), past, false, isTeacher);
        renderList(document.getElementById("db-awards"), awards, true, isTeacher);
      })
      .catch(function () {
        var msg = t("dbLoadError");
        ["db-events-upcoming", "db-events-past", "db-awards"].forEach(function (id) {
          var el = document.getElementById(id);
          if (el) el.innerHTML = '<p class="empty-hint">' + esc(msg) + "</p>";
        });
      });

    var mount = document.getElementById("teacher-panel-mount");
    if (!mount || !isTeacher) {
      if (mount) mount.innerHTML = "";
      return;
    }

    mount.innerHTML =
      '<section class="teacher-panel">' +
      '<h2 class="section-title" data-i18n="teacherPanel"></h2>' +
      '<div class="teacher-grid">' +
      '<form id="form-new-event" class="teacher-form">' +
      '<h3 data-i18n="teacherAddEvent"></h3>' +
      '<label><span data-i18n="teacherEventTitle"></span><input name="title" required type="text" autocomplete="off" /></label>' +
      '<label><span data-i18n="teacherEventDesc"></span><textarea name="description" rows="3"></textarea></label>' +
      '<label><span data-i18n="teacherEventDate"></span><input name="event_date" required type="date" /></label>' +
      '<label><span data-i18n="teacherEventStatus"></span>' +
      '<select name="status">' +
      '<option value="upcoming" data-i18n="teacherEventStatusUp"></option>' +
      '<option value="past" data-i18n="teacherEventStatusPast"></option>' +
      "</select></label>" +
      '<label><span data-i18n="teacherEventPhoto"></span><input name="photo" type="file" accept="image/jpeg,image/png,image/webp,image/gif" /></label>' +
      '<button type="submit" class="btn-primary" data-i18n="teacherSaveEvent"></button>' +
      "</form>" +
      '<form id="form-new-award" class="teacher-form">' +
      '<h3 data-i18n="teacherAddAward"></h3>' +
      '<label><span data-i18n="teacherAwardTitle"></span><input name="title" required type="text" autocomplete="off" /></label>' +
      '<label><span data-i18n="teacherAwardDesc"></span><textarea name="description" rows="3"></textarea></label>' +
      '<label><span data-i18n="teacherAwardType"></span>' +
      '<select name="award_type">' +
      '<option value="prize" data-i18n="awardTypePrize"></option>' +
      '<option value="diploma" data-i18n="awardTypeDiploma"></option>' +
      '<option value="certificate" data-i18n="awardTypeCertificate"></option>' +
      '<option value="other" data-i18n="awardTypeOther"></option>' +
      "</select></label>" +
      '<label><span data-i18n="teacherAwardYear"></span><input name="year" type="number" min="1990" max="2100" /></label>' +
      '<label><span data-i18n="teacherAwardRecipient"></span><input name="recipient" type="text" autocomplete="off" /></label>' +
      '<label><span data-i18n="teacherAwardPhoto"></span><input name="photo" type="file" accept="image/jpeg,image/png,image/webp,image/gif" /></label>' +
      '<button type="submit" class="btn-primary" data-i18n="teacherSaveAward"></button>' +
      "</form>" +
      "</div></section>";

    if (typeof window.cmstApplyI18n === "function") window.cmstApplyI18n();

    var fe = document.getElementById("form-new-event");
    if (fe) {
      fe.addEventListener("submit", function (ev) {
        ev.preventDefault();
        var fd = new FormData(fe);
        var photoIn = fe.querySelector('input[name="photo"]');
        uploadPhoto(photoIn)
          .then(function (imageUrl) {
            return window.CMST_AUTH.apiFetch("/api/events", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                subject_slug: sub,
                title: fd.get("title"),
                description: fd.get("description") || "",
                event_date: fd.get("event_date"),
                status: fd.get("status"),
                image_url: imageUrl,
              }),
            });
          })
          .then(function (r) {
            if (!r.ok) return alert(t("formError"));
            fe.reset();
            loadAll();
          })
          .catch(function () {
            alert(t("formError"));
          });
      });
    }

    var fa = document.getElementById("form-new-award");
    if (fa) {
      fa.addEventListener("submit", function (ev) {
        ev.preventDefault();
        var fd = new FormData(fa);
        var y = fd.get("year");
        var photoIn = fa.querySelector('input[name="photo"]');
        uploadPhoto(photoIn)
          .then(function (imageUrl) {
            return window.CMST_AUTH.apiFetch("/api/awards", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                subject_slug: sub,
                title: fd.get("title"),
                description: fd.get("description") || "",
                award_type: fd.get("award_type"),
                year: y ? parseInt(String(y), 10) : null,
                recipient: fd.get("recipient") || "",
                image_url: imageUrl,
              }),
            });
          })
          .then(function (r) {
            if (!r.ok) return alert(t("formError"));
            fa.reset();
            loadAll();
          })
          .catch(function () {
            alert(t("formError"));
          });
      });
    }
  }

  document.addEventListener("cmst:user", function () {
    loadAll();
  });
})();
