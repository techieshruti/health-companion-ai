// import express from "express";
// import cors from "cors";
// import dotenv from "dotenv";
// import reportRoutes from "./routes/reportRoutes.js";
// import chatRoutes from "./routes/chatRoutes.js";

// console.log("reportRoutes =", reportRoutes);

// dotenv.config();

// const app = express();

// app.use(cors());
// app.use(express.json());

// // All AI routes
// app.use("/api", (req, res, next) => {
//   console.log("API middleware reached:", req.method, req.originalUrl);
//   next();
// });

// app.use("/api", reportRoutes);
// app.use("/api/chat", chatRoutes);

// const PORT = process.env.PORT || 5000;

// app.get("/", (req, res) => {
//   res.json({
//     status: "OK",
//     routes: [
//       "/api/extract-tests",
//       "/api/generate-insights",
//       "/api/chat"
//     ]
//   });
// });

// app.post("/test", (req, res) => {
//   res.json({
//     message: "Server POST is working",
//   });
// });

// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });

import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.json({ message: "Root works" });
});

app.get("/api/ping", (req, res) => {
  res.json({ message: "API works" });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});