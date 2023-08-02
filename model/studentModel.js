import mongoose, { model } from "mongoose";
import bcrypt from "bcrypt";
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
  password: {
    type: String,
    required: [true, "please enter a pasword"],
    minlength: [6, "minimum password is 6 characters"],
  },
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
studentSchema.pre("save", async function (next) {
  const salt = await bcrypt.genSalt();
  this.password = await bcrypt.hash(this.password, salt);
  next();
});
studentSchema.statics.login = async function (email, password) {
  console.log("details", email + " passw " + password);

  const user = await this.findOne({ email });

  if (user) {
    const auth = await bcrypt.compare(password, user.password);
    console.log("auth", auth);
    if (auth) {
      console.log("the auth", auth);
      // user.filter(function (obj) {
      //   console.log(obj.field !== "password");
      // });
      // return user.select("-password");
      // data={

      //   "DOB":user.DOB,
      //  "gender": user.gender,
      // }
      return user;
    }
    return;
  }
  // throw Error("incorrect Email");
  return;
};
const student = model("Student", studentSchema);
export default student;
