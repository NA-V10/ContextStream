🚀 ContextStream – Eliminate Context Debt

Extract Decisions • Rationale • Next Steps from Any Conversation

Live App: https://context-stream-lilac.vercel.app

Backend API: https://contextstream.onrender.com/api/extract

📌 Overview

Teams today lose hours every week rewriting and repeating information buried in Slack threads, meeting notes, and emails.
This leads to:
```code
Missed decisions

Lost rationale

Slow onboarding

Repeated explanations

Decision reversals

This invisible productivity drain is Context Debt.

ContextStream eliminates context debt by automatically extracting:

🟦 Decisions

🟩 Rationale

🟨 Next Steps

from any conversation pasted into the interface.
```
This prototype is built for Startup School: Prompt to Prototype.

🎯 Key Features
```code
✔ Mock AI Extraction Engine

Extracts structure instantly using heuristic rules (no API keys needed).

✔ Live Deployed App

Frontend on Vercel

Backend on Render

Always-available public URLs for judges

✔ Lightweight Frontend

HTML + CSS + Vanilla JS for speed and simplicity.

✔ Modular Backend

Node.js + Express API ready to be swapped with Gemini/OpenAI in future versions.

✔ Zero Setup
```
Runs instantly in the browser.
Perfect for demos, evaluations, and rapid iteration.

🧪 Try It Yourself

Open the live app

Paste any conversation like:
```code
We will finalize the landing page by Friday.
I will send 3 design drafts because marketing asked for options.
Next: push wireframe today.
Action: run A/B test on hero headline.
```
Click Generate Context

See structured insights extracted instantly.

🛠 Tech Stack
```code
Frontend

HTML

CSS

JavaScript

Vercel deployment

Backend

Node.js

Express

CORS

dotenv

Render deployment
```

Architecture Diagram 
```code
Frontend (Vercel)
     |
     | POST /api/extract
     v
Backend (Render: Node + Express)
     |
     v
Mock Extraction Engine → Structured Output (JSON)
```

📂 Project Structure
```code
ContextStream/
│
├── server/
│   └── index.js               # Mock extraction backend (Express)
│
├── frontend/
│   ├── index.html             # UI
│   ├── styles.css             # Styling
│   └── app.js                 # API calls + rendering
│
├── docs/                      # Submission documentation (optional)
│
├── package.json
└── README.md
```

🚀 How to Run Locally
1. Clone repo
```code
git clone <repo-url>
cd ContextStream
```
3. Install backend dependencies
```code
npm install
```
4. Run backend
 ```code
npm start
```

Backend will run on:
```code
http://localhost:3000
```
4. Open frontend manually
Just open:
```code
frontend/index.html
```
in any browser.

🟨 Golden Prompt (Used to Start the Project)
```code
You are an AI system that extracts “Context Insights” from team conversations.

Given any conversation (Slack thread, meeting notes, or emails), identify and separate:

1. "decisions" — what was agreed or committed
2. "rationale" — reasons behind the decisions
3. "next_steps" — action items or tasks assigned

Return output ONLY in the following JSON format:

{
  "decisions": [],
  "rationale": [],
  "next_steps": []
}

The purpose is to eliminate “context debt” by making key information instantly accessible.
```

🚧 Future Roadmap
```code
Replace mock engine with Gemini 1.5 Flash / Pro

Slack integration

Gmail thread extraction

Timeline of decisions with versioning

Team workspace + authentication

Analytics dashboard for “context health”
```
📜 License

MIT License.

🙌 Acknowledgements

Built as part of Google’s Startup School – Prompt to Prototype program.
