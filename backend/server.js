import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import reportRoutes from "./routes/reportRoutes.js";
import chatRoutes from "./routes/chatRoutes.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// All AI routes
app.use("/api", reportRoutes);
app.use("/api/chat", chatRoutes);

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.json({
    status: "OK",
    routes: [
      "/api/extract-tests",
      "/api/generate-insights",
      "/api/chat"
    ]
  });
});

app.post("/test", (req, res) => {
  res.json({
    message: "Server POST is working",
  });
});

app._router.stack.forEach((middleware) => {
  if (middleware.route) {
    console.log(
      `${Object.keys(middleware.route.methods).join(",").toUpperCase()} ${middleware.route.path}`
    );
  } else if (middleware.name === "router") {
    middleware.handle.stack.forEach((handler) => {
      if (handler.route) {
        console.log(
          `${Object.keys(handler.route.methods).join(",").toUpperCase()} ${handler.route.path}`
        );
      }
    });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});