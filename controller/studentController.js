import Student from "../model/studentModel.js";
const handleErrors = (err) => {
  // console.log("handleErrors", err);

  let errors = { email: "", password: "" };
  //incoreet email
  if (err.message === "incorrect Email") {
    errors.email = "email not registered ";
  }
  //incoreet password
  if (err.message === "incorrect Password") {
    // errors.password = "password is incorrect ";
  }
  //duplivcate error code
  if (err.code === 11000) {
    errors.email = "that email is already registerd";
    return errors;
  }
  //validat
  if (err.message.includes("user validation failed")) {
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
    // const { email, password } = req.body;
    const verifycode = Math.floor(Math.random() * 90000) + 10000;
    req.body.code = verifycode;
    req.body.verified = false;
    try {
      const student = await Student.create(req.body);
      // const token = createToken(user._id);
      //const sendCode = await sendmail(verifycode, email);
      //res.cookie("jwt", token, { httpOnly: true, maxAge: maxAge * 1000 });
      res.status(201).json({
        student: student._id,
        // token,
        message: "Registration Succesfull Proceed to verify your Email",
      });
    } catch (err) {
      const errors = handleErrors(err);
      console.log("arinze", err);
      res.status(400).json({ errors });
    }
  }
}
