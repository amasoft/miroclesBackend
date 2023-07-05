import express from "express";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import cors from "cors";
// import routes from './Routes'
import studentroute from "./Routes/studentRoutes.js";

const app = express();

// middleware
app.use(express.json());
app.use(cookieParser());
app.use(cors());
// app.use(authRoutes);
app.use("/api/vi/student", studentroute);
// database connection
const dbURI =
  "mongodb+srv://academy:wT9kNM0qlSBSQFt8@cluster0.ouczjzq.mongodb.net/";
mongoose
  .connect(dbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useCreateIndex: true,
  })
  .then((result) =>
    app.listen(3000, function () {
      //   console.log(result);
      console.log("connection succesful");
    })
  )
  .catch((err) => console.log(err));

// routes
app.get("/", (req, res) => res.render("home"));
app.get("/smoothies", (req, res) => res.render("smoothies"));
app.get("/set-cookie", (req, res) => {
  // res.setHeader('Set-Cookie','newUser=true')
  res.cookie("newUser", false);
  res.cookie("isEmployer", true, {
    maxAge: 1000 * 60 * 60 * 24,
    httpOnly: true,
  });
  res.send("you got the session");
});
app.get("/read-cookies", (req, res) => {
  const cookies = req.cookies;
  console.log(cookies);
  res.json(cookies);
});
