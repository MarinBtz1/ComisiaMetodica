const path = require("path");
require("dotenv").config({ path: path.join(__dirname, ".env") });

const bcrypt = require("bcryptjs");
const supabase = require("./supabase");

function hash(p) {
  return bcrypt.hashSync(p, 10);
}

async function main() {
  await supabase.from("awards").delete().gte("id", 0);
  await supabase.from("events").delete().gte("id", 0);
  await supabase.from("users").delete().gte("id", 0);

  const { data: users, error: usersError } = await supabase
    .from("users")
    .insert([
      {
        email: "profesor@scoala.md",
        password_hash: hash("demo123"),
        full_name: "Prof. Demo Ion",
        role: "teacher",
      },
      {
        email: "elev@scoala.md",
        password_hash: hash("demo123"),
        full_name: "Elev Demo Ana",
        role: "student",
      },
    ])
    .select("id,email,role");
  if (usersError) throw usersError;

  const teacher = users.find((u) => u.role === "teacher");
  if (!teacher) throw new Error("Lipsește profesor demo.");

  const { error: eventsError } = await supabase.from("events").insert([
    {
      subject_slug: "comisia",
      title: "Ședință comisie științe reale",
      description: "Planificare semestrul II.",
      event_date: "2026-05-20",
      status: "upcoming",
      created_by: teacher.id,
    },
    {
      subject_slug: "matematica",
      title: "Pregătire olimpiadă",
      description: "Algebra, sala 12.",
      event_date: "2026-05-10",
      status: "upcoming",
      created_by: teacher.id,
    },
  ]);
  if (eventsError) throw eventsError;

  const { error: awardsError } = await supabase.from("awards").insert([
    {
      subject_slug: "matematica",
      title: "Premiu regional — concurs",
      description: "Echipa școlii — locul II.",
      award_type: "prize",
      year: 2025,
      recipient: "Echipa LT",
      created_by: teacher.id,
    },
  ]);
  if (awardsError) throw awardsError;

  console.log("Seed Supabase OK.");
}

main().catch((err) => {
  console.error(err.message || err);
  process.exit(1);
});
