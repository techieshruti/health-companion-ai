# 🩺 AI Health Companion

> Upload your blood test report and receive AI-powered explanations, health insights, lifestyle recommendations, and an easy-to-understand health dashboard.

![React](https://img.shields.io/badge/React-19-blue?logo=react)
![Vite](https://img.shields.io/badge/Vite-Frontend-purple?logo=vite)
![OpenAI](https://img.shields.io/badge/OpenAI-GPT--4.1--mini-black?logo=openai)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-Styled-06B6D4?logo=tailwindcss)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-yellow?logo=javascript)
![License](https://img.shields.io/badge/License-MIT-green)

---

## 📌 Problem

Medical reports are often difficult for non-medical users to understand.

Most people receive a PDF containing dozens of laboratory parameters without knowing:

- What each test measures
- Whether the result is concerning
- Which organs are affected
- What lifestyle changes may help
- When to consult a doctor

AI Health Companion transforms complex pathology reports into simple, personalized health insights.

---

# ✨ Features

### 📄 Smart Report Upload

- Upload PDF blood reports
- Automatic text extraction
- Multi-page support
- Sample report for instant demo

---

### 🧠 AI Health Analysis

For every laboratory parameter:

✅ Easy-to-understand explanation

✅ What the test measures

✅ Related organ/body system

✅ What the result means

✅ Possible causes

✅ Possible symptoms

✅ Recommended foods

✅ Lifestyle & exercise suggestions

✅ Questions to ask your doctor

---

### 📊 Interactive Dashboard

- Health Score
- Overall AI Summary
- Normal / High / Low / Borderline statistics
- Tests requiring immediate attention
- Beautiful health cards
- Detailed modal for every test

---

### 🎯 Deterministic Processing Pipeline

Unlike traditional AI prompts that produce inconsistent results, this project separates extraction and explanation into two independent AI workflows.

This significantly improves reliability and consistency.

---

# 🏗️ Architecture

```text
               PDF Upload
                    │
                    ▼
          PDF Text Extraction
             (pdf.js)
                    │
                    ▼
          OpenAI - Extract Tests
                    │
                    ▼
      JavaScript Normalization
      • Remove duplicates
      • Normalize names
      • Calculate status
                    │
                    ▼
      OpenAI - Generate Insights
                    │
                    ▼
         Merge AI + Structured Data
                    │
                    ▼
         Interactive Health Dashboard
```

---

# 🚀 Tech Stack

| Category | Technology |
|----------|------------|
| Frontend | React + Vite |
| Styling | Tailwind CSS |
| Routing | React Router |
| AI | OpenAI GPT-4.1-mini |
| PDF Parsing | pdf.js |
| State | Context API |
| Icons | Lucide React |

---

# 📷 Screenshots

| Dashboard | Test Details |
|-----------|--------------|
| Add screenshot | Add screenshot |

| Upload Screen | Health Summary |
|---------------|----------------|
| Add screenshot | Add screenshot |

---

# 🧠 AI Workflow

## Step 1 — Test Extraction

The first AI call extracts structured laboratory data only.

```json
{
  "name": "Vitamin D",
  "value": "18",
  "unit": "ng/mL",
  "range": "30-100",
  "status": "Low"
}
```

No explanations are generated during this step.

---

## Step 2 — AI Insights

The second AI call receives structured JSON and generates:

- Explanations
- Causes
- Symptoms
- Foods
- Exercise
- Doctor Advice
- Questions to Ask

This separation makes the output significantly more reliable.

---

# 📁 Project Structure

```
src
│
├── components
│   ├── upload
│   ├── dashboard
│   ├── report
│   └── common
│
├── context
│
├── services
│   └── openai.js
│
├── utils
│   ├── extractPdfText.js
│   ├── normalizeTests.js
│   ├── calculateStatus.js
│   └── formatUnit.js
│
├── data
│   └── sampleReport.js
│
└── pages
```

---

# 🌟 Future Improvements

- OCR support for scanned reports
- Image upload support
- Doctor consultation recommendations
- Historical report comparison
- Health trend graphs
- Medicine reminders
- Nutrition planning
- Voice-based health assistant

---

# ⚠️ Disclaimer

AI Health Companion is intended for educational and informational purposes only.

It does **not** replace professional medical advice, diagnosis, or treatment.

Always consult a qualified healthcare professional regarding medical concerns.

---

# 👨‍💻 Author

**Shruti Chandra**

Frontend Developer

Built with ❤️ using React, OpenAI, and Tailwind CSS.

---

## ⭐ If you found this project interesting, consider giving it a Star!