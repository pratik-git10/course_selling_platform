import express, { Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";
import * as dynamoose from "dynamoose";
import morgan from "morgan";
import helmet from "helmet";
import bodyParser from "body-parser";

dotenv.config();

const isProduction = process.env.NODE_ENV === "production";

if (!isProduction) {
  dynamoose.aws.ddb.local();
}

const app = express();
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));

app.get("/", (req, res) => {
  res.send("Hello");
});

const port = process.env.PORT || 3001;

if (!isProduction) {
  app.listen(port, () => {
    console.log(`server is running on http://localhost:${port}`);
  });
}
