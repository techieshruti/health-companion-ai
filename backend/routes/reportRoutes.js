import express from "express";
import {
  extractTests,
  generateInsights,
} from "../services/openaiService.js";
import { isValidHealthReport } from "../utils/validateHealthReport.js";

const router = express.Router();

router.get("/ping", (req, res) => {
  res.json({
    message: "Report routes are loaded"
  });
});

router.post("/extract-tests", async (req, res) => {
  try {
    const { reportText } = req.body;
    if (!reportText || !reportText.trim()) {
      return res.status(400).json({
        code: "INVALID_REPORT",
        error: "No readable report content was found.",
      });
    }

    const report = await extractTests(reportText);

    if (!isValidHealthReport(report)) {
      return res.status(422).json({
        code: "INVALID_REPORT",
        error:
          "The uploaded document does not appear to be a valid pathology or blood test report.",
      });
    }


    res.json(report);
  } catch (error) {
    console.error("Extract tests error:", error);

    res.status(500).json({
      code: "SERVER_ERROR",
      error: "Failed to analyze the health report.",
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