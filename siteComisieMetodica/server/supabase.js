const { createClient } = require("@supabase/supabase-js");

function getEnv(name) {
  const value = process.env[name];
  if (!value) {
    throw new Error(`Lipsește variabila de mediu ${name}.`);
  }
  return value;
}

const supabase = createClient(
  getEnv("SUPABASE_URL"),
  getEnv("SUPABASE_SERVICE_ROLE_KEY"),
  {
    auth: { persistSession: false, autoRefreshToken: false },
  }
);

module.exports = supabase;
