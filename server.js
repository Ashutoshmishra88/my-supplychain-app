import express from "express";
import cors from "cors";
import fetch from "node-fetch";

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.post("/contact", async (req, res) => {
  try {
    const response = await fetch(
      "https://script.google.com/macros/s/AKfycbzqNXKzMLN_36TKhNdMLiXsRPo5-RSQTe3tjqbuF5ZoObYjbLsqJ7RT_r0Eiphx2Dsa/exec",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(req.body),
      }
    );
    const text = await response.text();
    res.status(200).send(text);
  } catch (err) {
    res.status(500).send("Failed to relay message.");
  }
});

app.listen(PORT, () => {
  console.log(`Relay server running on http://localhost:${PORT}`);
});
