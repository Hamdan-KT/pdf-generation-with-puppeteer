import jsPDF from "jspdf";
import font from "../assets/fonts/NotoSansKannada-VariableFont_wdth,wght.ttf";

export const generatePDF = async (filename, container) => {
  var doc = new jsPDF("p", "pt", "a4");
  // font
  await doc.addFont(font, "NotoSansKannada", "normal");
  doc.setFont("NotoSansKannada");
  // generate pdf from html temp
  doc.html(container, {
    callback: (pdf) => {
      var pageCount = doc.internal.getNumberOfPages();
      pdf.deletePage(pageCount);
      pdf.save(`${filename}.pdf`);
    },
  });
};
