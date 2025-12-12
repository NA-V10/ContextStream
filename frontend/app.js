document.getElementById("analyzeBtn").addEventListener("click", async () => {
  const text = document.getElementById("inputText").value;
  if (!text.trim()) return alert("Paste conversation text first!");

  const res = await fetch("https://contextstream.onrender.com/api/extract", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ text })
  });

  const data = await res.json();

  const fmt = arr => (arr?.length ? arr.map(a => "• " + a).join("\n") : "—");

  document.getElementById("decisions").innerText = fmt(data.decisions);
  document.getElementById("rationale").innerText = fmt(data.rationale);
  document.getElementById("nextSteps").innerText = fmt(data.next_steps);

  document.getElementById("raw").innerText = JSON.stringify(data, null, 2);
});
