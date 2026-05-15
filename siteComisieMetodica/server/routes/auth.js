const express = require("express");
const bcrypt = require("bcryptjs");
const supabase = require("../supabase");
const { signToken, requireAuth } = require("../middleware/auth");

const router = express.Router();

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

router.post("/register", async (req, res) => {
  const { email, password, full_name, role } = req.body || {};
  if (!email || !password || !full_name || !role) {
    return res.status(400).json({ error: "Completează toate câmpurile." });
  }
  if (!EMAIL_RE.test(String(email).trim())) {
    return res.status(400).json({ error: "E-mail invalid." });
  }
  if (String(password).length < 6) {
    return res.status(400).json({ error: "Parola trebuie să aibă cel puțin 6 caractere." });
  }
  if (!["teacher", "student"].includes(role)) {
    return res.status(400).json({ error: "Rol invalid (teacher sau student)." });
  }
  const normalizedEmail = String(email).trim().toLowerCase();
  const { data: exists, error: existsError } = await supabase
    .from("users")
    .select("id")
    .eq("email", normalizedEmail)
    .maybeSingle();
  if (existsError) return res.status(500).json({ error: "Eroare la verificarea contului." });
  if (exists) return res.status(409).json({ error: "Există deja un cont cu acest e-mail." });

  const hash = bcrypt.hashSync(String(password), 10);
  const { data: user, error: insertError } = await supabase
    .from("users")
    .insert({
      email: normalizedEmail,
      password_hash: hash,
      full_name: String(full_name).trim(),
      role,
    })
    .select("id, email, full_name, role, created_at")
    .single();
  if (insertError) return res.status(500).json({ error: "Nu s-a putut crea contul." });

  const token = signToken(user);
  res.status(201).json({ token, user });
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body || {};
  if (!email || !password) {
    return res.status(400).json({ error: "E-mail și parolă sunt obligatorii." });
  }
  const normalizedEmail = String(email).trim().toLowerCase();
  const { data: user, error } = await supabase
    .from("users")
    .select("id, email, password_hash, full_name, role, created_at")
    .eq("email", normalizedEmail)
    .maybeSingle();
  if (error) return res.status(500).json({ error: "Eroare de autentificare." });
  if (!user || !bcrypt.compareSync(String(password), user.password_hash)) {
    return res.status(401).json({ error: "E-mail sau parolă incorectă." });
  }
  const publicUser = {
    id: user.id,
    email: user.email,
    full_name: user.full_name,
    role: user.role,
    created_at: user.created_at,
  };
  res.json({ token: signToken(publicUser), user: publicUser });
});

router.get("/me", requireAuth, (req, res) => {
  res.json(req.user);
});

module.exports = router;
