const jwt = require("jsonwebtoken");
const supabase = require("../supabase");

function getSecret() {
  const s = process.env.JWT_SECRET;
  if (s && s.length >= 16) return s;
  return "dev-cmst-jwt-secret-change-in-production-32";
}

function signToken(user) {
  return jwt.sign(
    { sub: user.id, email: user.email, role: user.role },
    getSecret(),
    { expiresIn: "7d" }
  );
}

async function requireAuth(req, res, next) {
  const h = req.headers.authorization || "";
  const m = h.match(/^Bearer\s+(.+)$/i);
  if (!m) return res.status(401).json({ error: "Autentificare necesară." });
  try {
    const payload = jwt.verify(m[1], getSecret());
    const { data: row, error } = await supabase
      .from("users")
      .select("id, email, full_name, role, created_at")
      .eq("id", payload.sub)
      .maybeSingle();
    if (error) return res.status(500).json({ error: "Eroare la validarea contului." });
    if (!row) return res.status(401).json({ error: "Cont invalid." });
    req.user = row;
    next();
  } catch {
    return res.status(401).json({ error: "Sesiune expirată sau invalidă." });
  }
}

function requireTeacher(req, res, next) {
  if (!req.user || req.user.role !== "teacher") {
    return res.status(403).json({ error: "Doar profesorii pot efectua această acțiune." });
  }
  next();
}

module.exports = { signToken, requireAuth, requireTeacher, getSecret };
