import React, { useState } from "react";
import { createPortal } from "react-dom";
import "./DownloadButton.css";
import { generatePDF } from "../common/common";

function DownloadButton({ pdfName, label, template }) {
  const [ref, setRef] = useState();
  const container = ref?.contentWindow?.document?.body;

  return (
    <>
      <iframe title="downloadFiles" className="iframe" ref={setRef}>
        {container && createPortal(template, container)}
      </iframe>
      <button onClick={() => generatePDF(pdfName, container)}>
        {label || "generatePDF"}
      </button>
    </>
  );
}

export default DownloadButton;

// import React, { useState } from 'react';
// import Button from '@mui/material/Button';
// import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
// import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
// import { downloadFile, generatePDF } from 'utils/common';
// import { createPortal } from 'react-dom';
// import { Grid } from '@mui/material';

// // Font URL for Noto Sans Kannada
// const KANNADA_FONT_URL = 'https://fonts.gstatic.com/s/notosanskannada/v8/LeFlHvsZjXu2c3ZRgBq9nLIAyNl8Owv2Knk.woff2';

// function DownloadButton({ type, variant, file, pdfName, color, label, template }) {
//     const [ref, setRef] = useState();
//     const container = ref?.contentWindow?.document?.body;

//     //for testing
//     file = 'https://mfiresgroupdiag.blob.core.windows.net/bijeshsirtest/error corrected new-cff8dfd1-ea69-4c5f-8330-e0b5d79fb34e.xlsx';

//     const generatePDFWithKannada = () => {
//         const iframeDoc = ref?.contentWindow?.document;
//         const iframeHead = iframeDoc?.querySelector('head');

//         // Create a <link> element to load the Kannada font
//         const fontLink = iframeDoc.createElement('link');
//         fontLink.href = KANNADA_FONT_URL;
//         fontLink.rel = 'stylesheet';
//         iframeHead?.appendChild(fontLink);

//         // Delay PDF generation to ensure font is loaded
//         setTimeout(() => {
//             generatePDF(pdfName, template);
//         }, 1000);
//     };

//     return (
//         <>
//             <iframe title="downloadFiles" className="iframe" style={{ width: 0, height: 0, border: 'none', outline: 'none' }} ref={setRef}>
//                 {container && createPortal(template, container)}
//             </iframe>
//             <Grid item xs={12} sm={6} md={4} lg={3}>
//                 {type === 'generatePDF' ? (
//                     <Button
//                         variant={variant || 'outlined'}
//                         color={color || 'secondary'}
//                         endIcon={<InsertDriveFileIcon />}
//                         sx={{ width: '100%', display: 'flex', marginTop: '9px' }}
//                         onClick={generatePDFWithKannada}
//                     >
//                         {label || 'generatePDF'}
//                     </Button>
//                 ) : (
//                     <Button
//                         variant={variant || 'outlined'}
//                         color={color || 'secondary'}
//                         endIcon={<CloudDownloadIcon />}
//                         sx={{ width: '100%', display: 'flex', marginTop: '9px' }}
//                         onClick={() => downloadFile(file)}
//                     >
//                         {label || 'Download'}
//                     </Button>
//                 )}
//             </Grid>
//         </>
//     );
// }

// export default DownloadButton;
