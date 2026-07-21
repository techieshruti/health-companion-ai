import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import reportRoutes from "./routes/reportRoutes.js";
import chatRoutes from "./routes/chatRoutes.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use((req, res, next) => {
  console.log(`${req.method} ${req.originalUrl}`);
  next();
});

app.use("/api", reportRoutes);
app.use("/api/chat", chatRoutes);

app.get("/", (req, res) => {
    res.json({
        status: "OK"
    });
});

const PORT = process.env.PORT || 5000;

app.get("/version", (req, res) => {
  res.json({
    version: "21-July-2026-v1"
  });
});

app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
});