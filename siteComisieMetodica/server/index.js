const path = require("path");
require("dotenv").config({ path: path.join(__dirname, ".env") });

const express = require("express");
const cors = require("cors");

const authRoutes = require("./routes/auth");
const eventsRoutes = require("./routes/events");
const awardsRoutes = require("./routes/awards");
const uploadRoutes = require("./routes/upload");

const app = express();
const PORT = Number(process.env.PORT) || 3000;
const root = path.join(__dirname, "..");

app.use(cors());
app.use(express.json({ limit: "1mb" }));

app.use("/api/auth", authRoutes);
app.use("/api/events", eventsRoutes);
app.use("/api/awards", awardsRoutes);
app.use("/api/upload", uploadRoutes);

app.use(express.static(root));

app.listen(PORT, () => {
  console.log(`Comisia Metodică — server la http://localhost:${PORT}`);
  console.log(`Deschide: http://localhost:${PORT}/login.html`);
  if (!process.env.JWT_SECRET || process.env.JWT_SECRET.length < 16) {
    console.warn(
      "[ATENȚIE] JWT_SECRET lipsește sau e scurt. Copiază server/.env.example → server/.env pentru producție."
    );
  }
  if (!process.env.SUPABASE_URL || !process.env.SUPABASE_SERVICE_ROLE_KEY) {
    console.warn(
      "[ATENȚIE] Configul Supabase lipsește. Setează SUPABASE_URL și SUPABASE_SERVICE_ROLE_KEY în server/.env."
    );
  }
});
