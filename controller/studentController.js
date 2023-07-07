import Student from "../model/studentModel.js";
import { check, validationResult } from "express-validator";
import { validateEmail } from "../util/validateEmail.js";
import { sendmail } from "../util/sendmail.js";
const handleErrors = (err) => {
  // console.log("handleErrors", err);

  let errors = {};

  if (err.message.includes("Student validation failed")) {
    Object.values(err.errors).forEach(({ properties }) => {
      errors[properties.path] = properties.message;
      console.log("888888", properties);
    });
    // console.log(err);
  }
  return errors;
};
export default class StudentController {
  static async addStudent(req, res, next) {
    try {
      const { email } = req.body;
      const verifycode = Math.floor(Math.random() * 90000) + 10000;
      req.body.code = verifycode;
      req.body.verified = false;
      if (!validateEmail(email))
        return res
          .status(400)
          .json({ message: "please enter coreect email address" });
      const student = await Student.create(req.body);
      const sendCode = await sendmail(verifycode, email);
      res.status(201).json({
        student: student._id,
        message: "Registration Succesfull Proceed to verify your Email",
      });
    } catch (err) {
      const errors = handleErrors(err);
      console.log("arinze", err);
      res.status(400).json({ errors });
    }
  }
}
