(function () {
  "use strict";

  var TOKEN_KEY = "cmst_token";

  function pathFile() {
    var p = location.pathname || "";
    return (p.split("/").pop() || "").toLowerCase();
  }

  function isPublicPage() {
    var f = pathFile();
    return f === "login.html" || f === "register.html";
  }

  function getToken() {
    return localStorage.getItem(TOKEN_KEY);
  }

  function setToken(t) {
    localStorage.setItem(TOKEN_KEY, t);
  }

  function clearToken() {
    localStorage.removeItem(TOKEN_KEY);
  }

  function apiUrl(path) {
    if (path.indexOf("/") !== 0) path = "/" + path;
    return path;
  }

  function apiFetch(path, options) {
    var token = getToken();
    var headers = Object.assign(
      { Accept: "application/json" },
      (options && options.headers) || {}
    );
    if (token) headers.Authorization = "Bearer " + token;
    return fetch(apiUrl(path), Object.assign({}, options, { headers: headers }));
  }

  /** Upload imagini (multipart); nu seta Content-Type manual. */
  function apiUpload(path, formData) {
    var token = getToken();
    var headers = { Accept: "application/json" };
    if (token) headers.Authorization = "Bearer " + token;
    return fetch(apiUrl(path), { method: "POST", headers: headers, body: formData });
  }

  window.CMST_AUTH = {
    TOKEN_KEY: TOKEN_KEY,
    getToken: getToken,
    setToken: setToken,
    clearToken: clearToken,
    isPublic: isPublicPage,
    apiFetch: apiFetch,
    apiUpload: apiUpload,
  };

  document.addEventListener("DOMContentLoaded", function () {
    if (isPublicPage()) {
      if (getToken()) {
        window.location.replace("index.html");
      }
      return;
    }

    if (!getToken()) {
      window.location.replace("login.html");
      return;
    }

    apiFetch("/api/auth/me", { method: "GET" })
      .then(function (r) {
        if (!r.ok) throw new Error("me");
        return r.json();
      })
      .then(function (user) {
        window.__CMST_USER__ = user;
        document.dispatchEvent(new CustomEvent("cmst:user", { detail: user }));
      })
      .catch(function () {
        clearToken();
        window.location.replace("login.html");
      });
  });
})();
