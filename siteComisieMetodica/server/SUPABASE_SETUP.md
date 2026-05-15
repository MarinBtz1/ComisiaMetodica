# Setup Supabase

1. Creeaza un proiect nou in Supabase.

2. Ruleaza scriptul `supabase-schema.sql` in SQL Editor (creeaza tabele `users`, `events`, `awards`, bucket-ul `comisia-media` si politica de citire publica pentru imagini).

3. Daca ai rulat versiuni vechi cu tabelul `news_posts`: ruleaza `supabase-migration-drop-news.sql` pentru a-l elimina.

4. Copiaza `server/.env.example` in `server/.env` si completeaza:

   - `SUPABASE_URL`

   - `SUPABASE_SERVICE_ROLE_KEY`

   - `JWT_SECRET`

   - `SUPABASE_STORAGE_BUCKET` (implicit `comisia-media`, acelasi nume ca in SQL)

5. Ruleaza:

   - `npm install`

   - `npm run seed` (optional, date demo)

   - `npm start`

Aplicatia va folosi exclusiv Supabase pentru:

- conturi utilizatori (`users`)

- evenimente (`events`)

- premii/diplome (`awards`)
