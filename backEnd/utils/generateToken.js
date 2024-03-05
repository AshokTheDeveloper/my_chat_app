import jwt from "jsonwebtoken";

const generateTokenAndSetCookie = (userid, res) => {
  const token = jwt.sign({ userid }, process.env.JWT_SECRETE, {
    expiresIn: "15d",
  });

  res.cookie("jwt_token", token, {
    maxAge: 15 * 24 * 60 * 60 * 1000, // max age the cookie should live
    httpOnly: true, // prevent execess cross-site scripting attacks
    sameSite: "strict", // Cross site request forgery attacks
    secure: process.env.NODE_ENV !== "development",
  });
};


export default generateTokenAndSetCookie;