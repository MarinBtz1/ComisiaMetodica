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

const AWARD_TYPES = new Set(["prize", "diploma", "certificate", "other"]);

router.get("/", requireAuth, async (req, res) => {
  const { subject } = req.query;
  let query = supabase
    .from("awards")
    .select(
      "id, subject_slug, title, description, award_type, year, recipient, image_url, created_by, created_at"
    )
    .order("year", { ascending: false, nullsFirst: false })
    .order("id", { ascending: false });
  if (subject && validSubject(subject)) {
    query = query.eq("subject_slug", subject);
  }
  const { data: rows, error } = await query;
  if (error) return res.status(500).json({ error: "Nu s-au putut încărca premiile." });
  res.json(rows);
});

router.post("/", requireAuth, requireTeacher, async (req, res) => {
  const { subject_slug, title, description, award_type, year, recipient, image_url } = req.body || {};
  if (!validSubject(subject_slug) || !title) {
    return res.status(400).json({ error: "subject_slug valid și title sunt obligatorii." });
  }
  const at = award_type && AWARD_TYPES.has(award_type) ? award_type : "prize";
  let y = year != null && year !== "" ? parseInt(year, 10) : null;
  if (y !== null && (Number.isNaN(y) || y < 1900 || y > 2100)) y = null;

  var img =
    image_url != null && String(image_url).trim() !== "" ? String(image_url).trim().slice(0, 2048) : null;
  if (img && !/^https:\/\//i.test(img)) img = null;

  const { data: row, error } = await supabase
    .from("awards")
    .insert({
      subject_slug,
      title: String(title).trim(),
      description: description != null ? String(description) : null,
      award_type: at,
      year: y,
      recipient: recipient != null ? String(recipient) : null,
      image_url: img,
      created_by: req.user.id,
    })
    .select("*")
    .single();
  if (error) return res.status(500).json({ error: "Nu s-a putut adăuga premiul." });
  res.status(201).json(row);
});

router.delete("/:id", requireAuth, requireTeacher, async (req, res) => {
  const id = Number(req.params.id);
  const { data, error } = await supabase.from("awards").delete().eq("id", id).select("id");
  if (error) return res.status(500).json({ error: "Nu s-a putut șterge înregistrarea." });
  if (!data || data.length === 0) return res.status(404).json({ error: "Înregistrare inexistentă." });
  res.json({ ok: true });
});

module.exports = router;
