/**
 * ContextStream — MOCK MODE ONLY
 * No OpenAI. No Gemini. No API keys.
 * 100% reliable for demo and Startup School submission.
 */

const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static("public"));

const PORT = process.env.PORT || 3000;

console.log("🚀 ContextStream running in MOCK MODE");

app.post("/api/extract", (req, res) => {
  const { text } = req.body || {};
  if (!text) return res.status(400).json({ error: "No text provided" });

  const lines = text.split("\n").map(l => l.trim()).filter(Boolean);

  const decisions = [];
  const rationale = [];
  const nextSteps = [];

  // simple heuristic mock engine
  lines.forEach(line => {
    const l = line.toLowerCase();

    if (l.includes("we will") || l.includes("finalize") || l.includes("decided"))
      decisions.push(line);

    if (l.includes("because") || l.includes("reason") || l.includes("since"))
      rationale.push(line);

    if (l.includes("next") || l.includes("todo") || l.includes("action") || l.includes("i will"))
      nextSteps.push(line);
  });

  res.json({
    mode: "mock",
    decisions,
    rationale,
    next_steps: nextSteps,
    fallback: lines.slice(0, 3)
  });
});

app.listen(PORT, () =>
  console.log(`🎯 Mock backend running at http://localhost:${PORT}`)
);
