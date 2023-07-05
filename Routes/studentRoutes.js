import express from "express";
import StudentController from "../controller/studentController.js";
const router = express.Router();
router.get("/", StudentController.addStudent);

export default router;
