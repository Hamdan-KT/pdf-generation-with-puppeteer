import express from "express";
import bodyParser from "body-parser";
import routes from "./route.js";
import cors from "cors";

const port = 7000;
const app = express();

app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));

app.use(cors());

const baseURL = "/api";

app.use(baseURL, routes);

// error handling
app.use((err, req, res, next) => {
  const errStatus = err.status || 500;
  const errMessage = err.message || "Something Went Wrong!";

  res.status(errStatus).send(errMessage);
});

app.listen(port, () => {
  console.log(`server Started! URL --> http://localhost:${port}${baseURL}`);
});
