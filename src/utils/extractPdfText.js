import * as pdfjsLib from "pdfjs-dist";
import pdfWorker from "pdfjs-dist/build/pdf.worker.min.mjs?url";

pdfjsLib.GlobalWorkerOptions.workerSrc = pdfWorker;

export async function extractPdfText(file) {
  const arrayBuffer = await file.arrayBuffer();

  const pdf = await pdfjsLib.getDocument({
    data: arrayBuffer,
  }).promise;
const totalPages = pdf.numPages;
  let fullText = "";

  for (let pageNo = 1; pageNo <= pdf.numPages; pageNo++) {
    const page = await pdf.getPage(pageNo);

    const textContent = await page.getTextContent();
let pageText = "";
let lastY = null;

textContent.items.forEach((item) => {
  if (lastY !== null && Math.abs(item.transform[5] - lastY) > 2) {
    pageText += "\n";
  }

  pageText += item.str + " ";

  lastY = item.transform[5];
});

fullText += `\n========== PAGE ${pageNo} ==========\n`;
fullText += pageText;
fullText += "\n";
  }

  return {
  text: fullText,
  totalPages,
};;
}