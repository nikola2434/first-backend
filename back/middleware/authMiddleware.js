import jwt from "jsonwebtoken";
import expressAsyncHandler from "express-async-handler";
import User from "../modulels/UserModel.js";

export const protect = expressAsyncHandler(async (req, res, next) => {
  let token;

  if (req.headers.authorization.startsWith("Bearer")) {
    token = req.headers.authorization.split(" ")[1];

    const decoded = jwt.verify(token, process.env.ACCESS_TOKEN);

    const userFound = await User.findById(decoded.userId);

    if (userFound) {
      req.user = userFound;
      next();
    } else {
      res.status(401);
      throw new Error("Не авторизован, без токена");
    }
  }

  if (!token) {
    res.status(401);
    throw new Error("Не авторизован, токен не работает");
  }
});
