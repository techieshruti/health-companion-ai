import express from "express";
import { askHealthAssistant } from "../services/openaiService.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { report, messages } = req.body;

    const answer = await askHealthAssistant(report, messages);

    res.json({
      answer,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      error: error.message,
    });
  }
});

export default router;