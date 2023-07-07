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
app.use(express.json());
app.use(cookieParser());
app.use(cors());
const port = 3001;
app.use("/api/vi/", studentroute);
const dbURI =
  "mongodb+srv://academy:wT9kNM0qlSBSQFt8@cluster0.ouczjzq.mongodb.net/AcademyDB";
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
