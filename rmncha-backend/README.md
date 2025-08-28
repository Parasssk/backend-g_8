# RMNCHA Backend (Express + MongoDB)

Setup
- Install: `npm install`
- Env: `cp .env.example .env`
- Dev: `npm run dev`

Endpoints
- GET `/health`
- GET `/api`
- Auth: POST `/api/auth/register`, POST `/api/auth/login`, GET `/api/auth/me`
- Hospitals: GET/POST `/api/hospitals`, GET/PUT/DELETE `/api/hospitals/:id`
- Patients: GET/POST `/api/patients`, GET/PUT/DELETE `/api/patients/:id`
- Referrals: GET/POST `/api/referrals`, GET/PUT/DELETE `/api/referrals/:id`

Roles: ADMIN, HOSPITAL, HEALTH_WORKER