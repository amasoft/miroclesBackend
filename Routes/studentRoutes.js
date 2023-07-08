import express from "express";
// import StudentController from "../controller/studentController";
import StudentController from "../controller/studentController.js";
const router = express.Router();
import { UserExist } from "../middleware/authMiddleware.js";
router.post("/", [UserExist], StudentController.addStudent);
router.post("/verify", StudentController.verifyEmail);

export default router;
