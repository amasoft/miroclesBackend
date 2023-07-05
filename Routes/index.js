import express from "express";
import StudentController from "../controller/studentController";

const router = express.Router();
router.use("/student", StudentController);
export default router;
