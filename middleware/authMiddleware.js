import Student from "../model/studentModel.js";
export const UserExist = async (req, res, next) => {
  const studentExist = await Student.findOne({ email: req.body.email });
  if (studentExist) {
    return res.status(200).json({
      message: "Student Already exist",
    });
  }
  next();
};
