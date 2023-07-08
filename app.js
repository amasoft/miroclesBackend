import express from "express";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import cors from "cors";
// import routes from './Routes'
import studentroute from "./Routes/studentRoutes.js";
import dotenv from "dotenv";

dotenv.config();
dotenv.config({ path: "./config.env" });
const app = express();

// middleware
app.use(cors({ origin: true }));
app.use(express.json());
app.use(cookieParser());
const port = process.env.PORT || 3001;
app.use("/api/vi/student/", studentroute);
const dbURI = process.env.URL;
mongoose
  .connect(dbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((result) =>
    app.listen(port, function () {
      console.log(`connection succesful ${port}`);
    })
  )
  .catch((err) => console.log(err));
