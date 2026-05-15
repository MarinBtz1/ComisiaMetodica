const path = require("path");
const express = require("express");
const multer = require("multer");
const supabase = require("../supabase");
const { requireAuth, requireTeacher } = require("../middleware/auth");

const router = express.Router();

const BUCKET = process.env.SUPABASE_STORAGE_BUCKET || "comisia-media";
const MAX_IMAGE_BYTES = 5 * 1024 * 1024;

const uploadImage = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: MAX_IMAGE_BYTES },
  fileFilter: function (_req, file, cb) {
    if (/^image\/(jpeg|png|webp|gif)$/i.test(file.mimetype)) cb(null, true);
    else cb(new Error("Doar imagini JPEG, PNG, WebP sau GIF."));
  },
});

router.post("/image", requireAuth, requireTeacher, function (req, res) {
  uploadImage.single("file")(req, res, async function (err) {
    if (err) {
      return res.status(400).json({
        error: err.message || "Fișier invalid sau prea mare (max 5 MB).",
      });
    }
    if (!req.file) {
      return res.status(400).json({ error: "Lipsește câmpul file (imagine)." });
    }
    try {
      var ext = path.extname(req.file.originalname || "").toLowerCase();
      if (![".jpg", ".jpeg", ".png", ".webp", ".gif"].includes(ext)) {
        if (req.file.mimetype === "image/jpeg") ext = ".jpg";
        else if (req.file.mimetype === "image/png") ext = ".png";
        else if (req.file.mimetype === "image/webp") ext = ".webp";
        else if (req.file.mimetype === "image/gif") ext = ".gif";
        else ext = ".bin";
      }
      var objectPath =
        String(req.user.id) +
        "/img/" +
        Date.now() +
        "-" +
        Math.random().toString(36).slice(2, 10) +
        ext;
      var up = await supabase.storage.from(BUCKET).upload(objectPath, req.file.buffer, {
        contentType: req.file.mimetype,
        upsert: false,
      });
      if (up.error) {
        console.error(up.error);
        return res.status(500).json({
          error:
            "Upload eșuat. Creează bucket-ul public „" +
            BUCKET +
            "” în Supabase Storage (vezi supabase-schema.sql).",
        });
      }
      var pub = supabase.storage.from(BUCKET).getPublicUrl(objectPath);
      res.json({ url: pub.data.publicUrl });
    } catch (e) {
      res.status(500).json({ error: e.message || "Eroare upload." });
    }
  });
});

module.exports = router;
