const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

const quotes = [
  "Believe you can and you're halfway there.",
  "The best way to predict the future is to invent it.",
  "Life is short. Smile while you still have teeth.",
  "Do one thing every day that scares you.",
  "Dream big and dare to fail."
];

app.get('/', (req, res) => {
  const quote = quotes[Math.floor(Math.random() * quotes.length)];
  res.json({ quote });
});

app.listen(PORT, () => {
  console.log(`Quote API running on http://localhost:${PORT}`);
});
