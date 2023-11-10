import express from "express";
import { printPDF } from "./common.js";

const router = express.Router();

router.get("/download", async (req, res, next) => {
  console.log("downloading...");
  await printPDF()
    .then((pdf) => {
      res.set({
        "Content-Type": "application/pdf",
        "Content-Length": pdf.length,
      });

      console.log(typeof pdf);
      console.log({ pdf });
      res.send(pdf);
    })
    .catch((err) => {
      console.log({ err });
    });
  console.log("downloading completed!");
});

export default router;
