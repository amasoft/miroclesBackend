import mongoose, { model } from "mongoose";
// import { isEmail, isEmpty } from "validator";
const studentSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, "Please Enter your Firstname"],
    uppercase: true,
  },
  lastName: {
    type: String,
    required: [true, "Please Enter your lastname"],
    uppercase: true,
  },
  middleName: {
    type: String,
    required: [true, "Please Enter your middlename"],
    uppercase: true,
  },
  email: {
    type: String,
    required: [true, "please enter an email"],
    unique: true,
    lowercase: true,
    // validate: [isEmail, "please enter  valid email"],
  },
  phone: {
    type: String,
    required: [true, "Please Enter your mobile number"],
  },
  DOB: {
    type: String,
    required: [true, "Please Enter your date of birthday"],
  },
  gender: {
    type: String,
    required: [true, "Please select your gender"],
  },
  //   password: {
  //     type: String,
  //     required: [true, "please enter a pasword"],
  //     minlength: [6, "minimum password is 6 characters"],
  //   },
  verified: {
    type: Boolean,
    required: true,
    default: false,
  },
  code: {
    type: String,
    required: true,
  },
});
const student = model("Student", studentSchema);
export default student;
