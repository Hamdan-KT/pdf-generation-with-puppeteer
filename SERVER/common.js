import puppeteer from "puppeteer";
import Handlebars from "handlebars";
import path from "path";
import { promises as fsPromises } from "fs";

async function compilePDF(templateName, data) {
  const filePath = path.join(process.cwd(), "templates", `${templateName}.hbs`);
  // get html template
  const html = await fsPromises.readFile(filePath, "utf-8");
  return Handlebars.compile(html)(data);
}

export const printPDF = async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  const content = await compilePDF("template", {
    name: "Hamdan",
    designation: "SoftwareDeveloper",
  });
  await page.setContent(content);
  await page.addStyleTag({
    content: "p { color: red } h1 { color: blue }",
  });
  const pdf = await page.pdf({ format: "A4", printBackground: true });

  await browser.close();
  return pdf;
};

export const createError = (status, message) => {
  const err = new Error();
  err.status = status;
  err.message = message;

  return err;
};
