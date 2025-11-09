const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json()); // to read JSON body

app.get("/", (req, res) => {
  res.send("Backend running...");
});

// ✅ POST route to receive a message from frontend
app.post("/send-message", (req, res) => {
  const { message } = req.body;
  console.log("Message received:", message);
  res.json({ reply: `Server received your message: "${message}"` });
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
