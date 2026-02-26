# Shining Star Monorepo

Vite + React frontend and Express + Nodemailer backend organized in a clean client/server layout.

## Structure

- `client/` – Vite + React + Tailwind frontend
- `server/` – Express API with Nodemailer

## Prerequisites

- Node.js 18+
- npm

## Setup

### Install dependencies

- Client: `cd client && npm install`
- Server: `cd server && npm install`

### Environment variables

- Client: `client/.env`
  - `VITE_API_BASE_URL=http://localhost:5000`
- Server: `server/.env`
  - `MAIL_USER`, `MAIL_PASS`, `MAIL_TO`, `MAIL_FROM`, `CORS_ORIGIN`, `PORT`

### Run

- Client: `cd client && npm run dev` (default http://localhost:5173)
- Server: `cd server && npm run dev` (default http://localhost:5000)
- Root convenience (requires root `npm install`):
  - `npm run dev:client`
  - `npm run dev:server`
  - `npm run dev` (runs both via concurrently)

### Build & Preview (frontend)

- `cd client && npm run build`
- `cd client && npm run preview`

## Notes

- Backend uses Gmail App Password via Nodemailer; ensure env vars are set before running.
- Contact form posts to `/api/contact` using `VITE_API_BASE_URL`.

## License

Private software for Shining Star Building Materials Trading LLC.
