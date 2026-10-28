# Otake Backend

Node.js + Express + MongoDB backend for Otake website.

## Setup

1. Copy .env.example to .env and update values
2. Install dependencies
   `ash
   npm install
   `
3. Run dev server
   `ash
   npm run dev
   `
4. Run production
   `ash
   npm start
   `

## API Endpoints

| Method | Endpoint | Description |
| --- | --- | --- |
| GET | / | Health check |
| POST | /api/auth/register | Register user |
| POST | /api/auth/login | Login user |
| POST | /api/contact | Submit contact form |
| POST | /api/newsletter/subscribe | Subscribe to newsletter |
