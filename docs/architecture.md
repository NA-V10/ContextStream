# Architecture

## Frontend
- Static HTML/CSS/JS served from `/public`
- Sends text to backend using POST `/api/extract`

## Backend
- Node/Express server (`server/index.js`)
- MODE=mock → local keyword-based extractor
- MODE=openai → forwards prompt to OpenAI API

## Flow
User → Browser → /api/extract → [Mock OR OpenAI] → JSON response
