import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

export function downloadReport(report) {
  const doc = new jsPDF();

  const patient = report?.patient || {};
  const summary = report?.summary || {};
  const tests = report?.tests || [];

  const abnormalTests = tests.filter(
    (test) => test.status !== "Normal"
  );

 // =========================
// HEADER
// =========================

doc.setFillColor(13, 35, 66);
doc.rect(0, 0, 210, 34, "F");

// Logo Circle
doc.setFillColor(14, 165, 233);
doc.circle(18, 17, 5, "F");

doc.setTextColor(255);

doc.setFont("helvetica", "bold");
doc.setFontSize(20);
doc.text("AI Health Companion", 28, 16);

doc.setFont("helvetica", "normal");
doc.setFontSize(10);
doc.text("Smart AI Powered Health Report", 28, 23);

// Generated Date
const generatedDate = new Date().toLocaleDateString();

doc.setFontSize(9);
doc.text(`Generated: ${generatedDate}`, 145, 17);

doc.setDrawColor(14, 165, 233);
doc.setLineWidth(0.8);
doc.line(0, 34, 210, 34);

let y = 46;

// =========================
// PATIENT INFORMATION
// =========================

doc.setFont("helvetica", "bold");
doc.setFontSize(15);
doc.setTextColor(25);

doc.text("Patient Information", 14, y);

y += 8;

const cardWidth = 88;
const cardHeight = 14;

const patientInfo = [
  ["Name", patient.name || "Demo User"],
  ["Age", patient.age || "-"],
  ["Gender", patient.gender || "-"],
  ["Report Date", patient.reportDate || "-"],
];

patientInfo.forEach((item, index) => {
  const col = index % 2;
  const row = Math.floor(index / 2);

  const x = 14 + col * 94;
  const boxY = y + row * 18;

  doc.setFillColor(235, 243, 252);
  doc.roundedRect(x, boxY, cardWidth, cardHeight, 3, 3, "F");

  doc.setFontSize(9);
  doc.setTextColor(120);
  doc.text(item[0], x + 5, boxY + 5);

  doc.setFont("helvetica", "bold");
  doc.setFontSize(11);
  doc.setTextColor(30);
  doc.text(item[1].toString(), x + 5, boxY + 11);
});

y += 44;

// =========================
// HEALTH SCORE
// =========================

doc.setFillColor(235,243,252);
doc.roundedRect(14, y, 182, 46, 5, 5, "F");

const score = summary.healthScore ?? 82;

let gaugeColor = [34,197,94];
let healthLabel = "Excellent";
let healthDescription = "Your health indicators are in a healthy range.";

if(score < 90){
    healthLabel = "Good";
    healthDescription = "Minor improvements can further optimize your health.";
}

if(score < 75){
    gaugeColor = [234,179,8];
    healthLabel = "Needs Attention";
    healthDescription = "Some health parameters require monitoring.";
}

if(score < 60){
    gaugeColor = [239,68,68];
    healthLabel = "Critical";
    healthDescription = "Consult a healthcare professional promptly.";
}

doc.setFont("helvetica","bold");
doc.setFontSize(14);
doc.setTextColor(20);

doc.text("Overall Health Score",20,y+10);

doc.setFont("helvetica","normal");
doc.setFontSize(9);
doc.setTextColor(90);

doc.text(
    healthDescription,
    20,
    y+18,
    {
        maxWidth:95
    }
);

// Status badge
doc.setFillColor(...gaugeColor);
doc.roundedRect(20,y+24,34,8,3,3,"F");
doc.setFont("helvetica","bold");
doc.setTextColor(255);
doc.setFontSize(10);

const badgeWidth = 34;
const statusWidth = doc.getTextWidth(healthLabel.toUpperCase());

doc.text(
    healthLabel.toUpperCase(),
    20 + (badgeWidth-statusWidth)/2,
    y+29
);

// ---------- Gauge ----------

const cx = 160;
const cy = y+22;
const radius = 11;

// background circle

doc.setDrawColor(210);
doc.setLineWidth(3);

doc.circle(cx,cy,radius);

// progress

doc.setDrawColor(...gaugeColor);

for(let i=0;i<score*3.6;i+=6){

    const angle=(i-90)*(Math.PI/180);

    const x1=cx+radius*Math.cos(angle);
    const y1=cy+radius*Math.sin(angle);

    const x2=cx+(radius-2)*Math.cos(angle);
    const y2=cy+(radius-2)*Math.sin(angle);

    doc.line(x1,y1,x2,y2);

}

// Score

doc.setFont("helvetica","bold");
doc.setFontSize(16);

doc.setTextColor(...gaugeColor);

const scoreText = score.toString();

const scoreWidth = doc.getTextWidth(scoreText);

doc.text(
    scoreText,
    cx - scoreWidth/2,
    cy+2
);

y += 58;


// =========================
// HEALTH SUMMARY
// =========================

doc.setFont("helvetica", "bold");
doc.setFontSize(15);
doc.setTextColor(25);

doc.text("Health Summary", 14, y);

y += 8;

const cards = [
  {
    title: "Tests",
    value: summary.totalTests,
    color: [59, 130, 246],
  },
  {
    title: "Normal",
    value: summary.normal,
    color: [34, 197, 94],
  },
  {
    title: "High",
    value: summary.high,
    color: [239, 68, 68],
  },
  {
    title: "Low",
    value: summary.low,
    color: [249, 115, 22],
  },
  {
    title: "Borderline",
    value: summary.borderline,
    color: [234, 179, 8],
  },
];

cards.forEach((card, index) => {
  const width = 34;
  const gap = 3;

  const x = 14 + index * (width + gap);

  doc.setFillColor(235, 243, 252);
  doc.roundedRect(x, y, width, 24, 3, 3, "F");

  doc.setTextColor(...card.color);
  doc.setFontSize(15);
  doc.setFont("helvetica", "bold");
  doc.text(card.value.toString(), x + 5, y + 10);

  doc.setFontSize(8);
  doc.setTextColor(90);
  doc.setFont("helvetica", "normal");
  doc.text(card.title, x + 5, y + 18);
});

y += 36;

// =========================
// AI HEALTH INSIGHTS
// =========================

const aiSummary = `Your report contains ${summary.totalTests} laboratory tests. ${
  summary.normal
} are within the normal range. ${
  abnormalTests.length
    ? abnormalTests.map((t) => t.name).join(", ") +
      " require attention."
    : "All tests are within the normal range."
}`;

doc.setFillColor(225, 240, 252);

doc.roundedRect(
  14,
  y,
  182,
  32,
  4,
  4,
  "F"
);

doc.setDrawColor(14, 165, 233);
doc.setLineWidth(1);

doc.line(18, y + 6, 18, y + 26);

doc.setFont("helvetica", "bold");
doc.setFontSize(13);
doc.setTextColor(14, 165, 233);

doc.text("AI Health Insights", 24, y + 10);

doc.setFont("helvetica", "normal");
doc.setFontSize(10);
doc.setTextColor(70);

doc.text(
  aiSummary,
  24,
  y + 18,
  {
    maxWidth: 160,
  }
);

y += 42;

// =========================
// NEEDS ATTENTION
// =========================

if (abnormalTests.length > 0) {

  // Add a new page if there's not enough space
  if (y > 200) {
    doc.addPage();
    y = 20;
  }

  doc.setFont("helvetica", "bold");
  doc.setFontSize(15);
  doc.setTextColor(30);

  doc.text("Needs Attention", 14, y);

  y += 10;

  abnormalTests.forEach((test, index) => {

    // Card Background
    doc.setFillColor(239,245,252);
    const cardWidth = 84;
    const gap = 10;
const cardHeight = 42;

const col = index % 2;
const row = Math.floor(index / 2);

const cardX = 14 + col * (cardWidth + gap);
const cardY = y + row * 52;

doc.roundedRect(
  cardX,
  cardY,
  cardWidth,
  cardHeight,
  4,
  4,
  "F"
);

    doc.setFont("helvetica","bold");
    doc.setFontSize(13);
    doc.setTextColor(25);

    doc.text(String(test.name || "-"), cardX + 6, cardY + 8);

    // Status Pill
    let bg=[34,197,94];
    let text="NORMAL";

    if(test.status==="High"){
      bg=[239,68,68];
      text="HIGH";
    }

    if(test.status==="Low"){
      bg=[249,115,22];
      text="LOW";
    }

    if(test.status==="Borderline"){
      bg=[234,179,8];
      text="BORDERLINE";
    }

    doc.setFillColor(...bg);

    doc.roundedRect(cardX + 6, cardY + 12, 34, 8, 3, 3, "F");

    doc.setTextColor(255);
    doc.setFontSize(8);

  doc.setFontSize(7);

const badgeWidth = 34;

const textWidth = doc.getTextWidth(text);

const badgeX = cardX + 6;

doc.text(
  text,
  badgeX + (badgeWidth - textWidth) / 2,
  cardY + 17
);

    doc.setTextColor(60);

    doc.setFontSize(10);

    // ---------- Result ----------
const value = String(test.value ?? "");
const unit = String(test.unit ?? "");

const resultX = cardX + 56;

// Label
doc.setFont("helvetica", "normal");
doc.setFontSize(9);
doc.setTextColor(95);

doc.text(
  "Result",
  resultX,
  cardY + 8
);

// Number
doc.setFont("helvetica", "bold");
doc.setFontSize(16);
doc.setTextColor(20);

const numberY = cardY + 18;

doc.text(String(value), resultX, numberY);

// Unit
doc.setFont("helvetica", "normal");
doc.setFontSize(9);
doc.setTextColor(70);

const numberWidth = doc.getTextWidth(String(value));

// Add a visible gap after the number
const unitX = resultX + numberWidth + 6;

doc.text(String(unit), unitX, numberY);


doc.setFont("helvetica", "normal");
doc.setFontSize(9);
doc.setTextColor(70);

doc.setFont("helvetica", "normal");
doc.setFontSize(9);
doc.setTextColor(70);

const rangeText = `Normal : ${test.range}`;
const rangeWidth = doc.getTextWidth(rangeText);

doc.text(
  rangeText,
  cardX + (cardWidth - rangeWidth) / 2,
  cardY + 30
);

    // Recommendation
    doc.setTextColor(110);
    doc.setFontSize(9.5);

    doc.text(
  String(test.recommendation || "No recommendation available."),
  cardX + 6,
  cardY + 36,
  {
    maxWidth: 72,
  }
);
  });
  const totalRows = Math.ceil(abnormalTests.length / 2);
y += totalRows * 50 + 10;

}
if(y>210){

doc.addPage();

y=20;

}

// =========================
// LAB RESULTS
// =========================

doc.setTextColor(20);
doc.setFont("helvetica", "bold");
doc.setFontSize(15);

doc.text("Laboratory Results", 14, y);

y += 6;

autoTable(doc, {

  didParseCell(data) {
  if (data.section === "body" && data.column.index === 1) {
    switch (data.cell.raw) {
      case "High":
        data.cell.styles.textColor = [239, 68, 68];
        break;
      case "Low":
        data.cell.styles.textColor = [249, 115, 22];
        break;
      case "Normal":
        data.cell.styles.textColor = [34, 197, 94];
        break;
      case "Borderline":
        data.cell.styles.textColor = [234, 179, 8];
        break;
    }

    data.cell.styles.fontStyle = "bold";
  }
},
  
  startY: y,

  head: [["Test", "Status", "Result", "Reference"]],

  body: tests.map((test) => [
    test.name,
    test.status,
    `${test.value} ${test.unit ?? ""}`.trim(),
    test.range,
  ]),

  theme: "grid",

  styles: {
    fontSize: 10,
    cellPadding: 3,
    lineColor:[225,225,225],
textColor:[15,15,15],
  },

  headStyles: {
    fillColor: [13,35,66],
    textColor: [255, 255, 255],
    fontStyle: "bold",
    fontSize:11,
    minCellHeight:10,
    halign:"left",
    valign:"middle",
  },

  alternateRowStyles: {
    fillColor: [248, 250, 252],
  },
});

// =========================
// FOOTER
// =========================

const pageHeight = doc.internal.pageSize.height;

doc.setDrawColor(220);

doc.line(
  14,
  pageHeight - 22,
  196,
  pageHeight - 22
);

doc.setFont("helvetica", "bold");
doc.setFontSize(10);
doc.setTextColor(90);

doc.text(
  "Generated by AI Health Companion",
  14,
  pageHeight - 15
);

doc.setFont("helvetica", "normal");
doc.setFontSize(8);

doc.text(
  "This AI-generated report is intended for informational purposes only and should not replace professional medical advice.",
  14,
  pageHeight - 9,
  {
    maxWidth: 180,
  }
);

doc.save("AI-Health-Summary.pdf");
}