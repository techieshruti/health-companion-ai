import express from "express";
import {
  extractTests,
  generateInsights,
} from "../services/openaiService.js";

const router = express.Router();

router.get("/ping", (req, res) => {
  res.json({
    message: "Report routes are loaded"
  });
});

router.get("/ping", (req, res) => {
  res.json({
    message: "Report routes are working",
  });
});

router.post("/extract-tests", async (req, res) => {
  try {
    const { reportText } = req.body;

    const report = await extractTests(reportText);

    res.json(report);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      error: error.message,
    });
  }
});

router.post("/generate-insights", async (req, res) => {
  try {
    const { extractedReport } = req.body;

    const insights = await generateInsights(extractedReport);

    res.json(insights);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      error: error.message,
    });
  }
});

export default router;