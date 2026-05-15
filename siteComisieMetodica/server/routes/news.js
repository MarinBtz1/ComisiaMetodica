const express = require("express");
const supabase = require("../supabase");
const { requireAuth, requireTeacher } = require("../middleware/auth");
const router = express.Router();

router.get("/", requireAuth, async (req, res) => {
  const { data, error } = await supabase
    .from("news")
    .select("id, file_url, file_name, mime_type, created_by, created_at")
    .order("created_at", { ascending: false });
  if (error) return res.status(500).json({ error: "Nu s-au putut încărca noutățile." });
  res.json(data);
});

router.post("/", requireAuth, requireTeacher, async (req, res) => {
  const { file_url, file_name, mime_type } = req.body || {};
  if (!file_url) return res.status(400).json({ error: "file_url este obligatoriu." });
  const { data, error } = await supabase
    .from("news")
    .insert({ file_url, file_name: file_name || null, mime_type: mime_type || null, created_by: req.user.id })
    .select("*")
    .single();
  if (error) return res.status(500).json({ error: "Nu s-a putut salva noutatea." });
  res.status(201).json(data);
});

router.delete("/:id", requireAuth, requireTeacher, async (req, res) => {
  const id = Number(req.params.id);
  const { data, error } = await supabase.from("news").delete().eq("id", id).select("id");
  if (error) return res.status(500).json({ error: "Nu s-a putut șterge." });
  if (!data || !data.length) return res.status(404).json({ error: "Înregistrare inexistentă." });
  res.json({ ok: true });
});

module.exports = router;