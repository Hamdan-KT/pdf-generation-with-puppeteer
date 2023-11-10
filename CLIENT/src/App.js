import React, { useEffect } from "react";
import { jsPDF } from "jspdf";
import font from "./assets/fonts/NotoSansKannada-VariableFont_wdth,wght.ttf";
import DownloadButton from "./downloadButton/DownloadButton";
import Template from "./assets/templates/Template";
import "./App.css";
import PUPPETEER from "./puppeteer";

function App() {
  const generatePDF = async () => {
    const doc = new jsPDF();

    // Load the font asynchronously
    doc.addFont(font, "NotoSansKannada", "normal");

    doc.setFont("NotoSansKannada");
    doc.setFontSize(16);
    doc.text("ಹಲೋ, ವಿಶ್ವ!", 10, 20);

    doc.setFont("Helvetica");
    doc.setFontSize(12);
    doc.text("Hello, World!", 10, 30);

    doc.save("template.pdf");
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Generate PDF with Kannada and English Text</h1>
        <button onClick={generatePDF}>Your Pdf</button>
        <DownloadButton template={<Template />} pdfName="test" label="My Pdf" />
      </header>
      <PUPPETEER />
      <br />
      {/* <div className="sliderBox">
        <div className="slider">
          <div className="imgDiv"></div>
          <div className="imgDiv"></div>
          <div className="imgDiv"></div>
          <div className="imgDiv"></div>
          <div className="imgDiv"></div>
          <div className="imgDiv"></div>
          <div className="imgDiv"></div>
          <div className="imgDiv"></div>
          <div className="imgDiv"></div>
          <div className="imgDiv"></div>
          <div className="imgDiv"></div>
          <div className="imgDiv"></div>
          <div className="imgDiv"></div>
          <div className="imgDiv"></div>
          <div className="imgDiv"></div>
          <div className="imgDiv"></div>
          <div className="imgDiv"></div>
          <div className="imgDiv"></div>
          <div className="imgDiv"></div>
          <div className="imgDiv"></div>
          <div className="imgDiv"></div>
          <div className="imgDiv"></div>
          <div className="imgDiv"></div>
          <div className="imgDiv"></div>
        </div>
      </div> */}
    </div>
  );
}

export default App;
