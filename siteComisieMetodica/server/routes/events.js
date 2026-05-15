const express = require("express");
const supabase = require("../supabase");
const { requireAuth, requireTeacher } = require("../middleware/auth");

const router = express.Router();

const SUBJECTS = new Set([
  "comisia",
  "matematica",
  "fizica",
  "chimie",
  "informatica",
  "biologie",
]);

function validSubject(slug) {
  return slug && SUBJECTS.has(String(slug));
}

router.get("/", requireAuth, async (req, res) => {
  const { subject, status } = req.query;
  let query = supabase
    .from("events")
    .select("id, subject_slug, title, description, event_date, status, image_url, created_by, created_at")
    .order("event_date", { ascending: false })
    .order("id", { ascending: false });
  if (subject && validSubject(subject)) {
    query = query.eq("subject_slug", subject);
  }
  if (status === "upcoming" || status === "past") {
    query = query.eq("status", status);
  }
  const { data: rows, error } = await query;
  if (error) return res.status(500).json({ error: "Nu s-au putut încărca evenimentele." });
  res.json(rows);
});

router.post("/", requireAuth, requireTeacher, async (req, res) => {
  const { subject_slug, title, description, event_date, status, image_url } = req.body || {};
  if (!validSubject(subject_slug) || !title || !event_date || !status) {
    return res.status(400).json({
      error: "subject_slug valid, title, event_date (YYYY-MM-DD) și status (upcoming|past) sunt obligatorii.",
    });
  }
  if (!["upcoming", "past"].includes(status)) {
    return res.status(400).json({ error: "status trebuie să fie upcoming sau past." });
  }
  var img =
    image_url != null && String(image_url).trim() !== "" ? String(image_url).trim().slice(0, 2048) : null;
  if (img && !/^https:\/\//i.test(img)) img = null;

  const { data: row, error } = await supabase
    .from("events")
    .insert({
      subject_slug,
      title: String(title).trim(),
      description: description != null ? String(description) : null,
      event_date: String(event_date).slice(0, 10),
      status,
      image_url: img,
      created_by: req.user.id,
    })
    .select("*")
    .single();
  if (error) return res.status(500).json({ error: "Nu s-a putut adăuga evenimentul." });
  res.status(201).json(row);
});

router.delete("/:id", requireAuth, requireTeacher, async (req, res) => {
  const id = Number(req.params.id);
  const { data, error } = await supabase.from("events").delete().eq("id", id).select("id");
  if (error) return res.status(500).json({ error: "Nu s-a putut șterge evenimentul." });
  if (!data || data.length === 0) return res.status(404).json({ error: "Eveniment inexistent." });
  res.json({ ok: true });
});

module.exports = router;
