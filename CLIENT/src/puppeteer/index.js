import React from "react";
import axios from "axios";

function PUPPETEER() {
  const axiosClient = axios.create({
    responseType: "arraybuffer",
    headers: {
      Accept: "application/pdf",
    },
    baseURL: "http://localhost:7000/api",
  });

  function getPDF() {
    try {
      return axiosClient.get(`/download`);
    } catch (error) {
      throw error;
    }
  }

  function downloadPDF() {
    console.log("pdf downloading");
    return getPDF() // API call
      .then((response) => {
        console.log(response);
        console.log(typeof response.data);
        const blob = new Blob([response.data], {
          type: "application/pdf",
        });
        const link = document.createElement("a");
        link.href = window.URL.createObjectURL(blob);
        link.download = `test.pdf`;
        link.click();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <>
      <h1>PDF GENERATION USING PUPPETEER</h1>
      <button onClick={downloadPDF}>DOWNLOAD</button>
    </>
  );
}

export default PUPPETEER;
