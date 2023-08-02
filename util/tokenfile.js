import jwt from "jsonwebtoken";
const maxAge = 3 * 24 * 60 * 60;
export const createToken = (id) => {
  return jwt.sign({ id }, "the world is a blessed place ", {
    expiresIn: maxAge,
  });
};
