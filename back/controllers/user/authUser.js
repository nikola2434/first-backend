import expressAsyncHandler from "express-async-handler";
import { generateToken } from "../../helper/generateToken.js";
import User from "../../modulels/UserModel.js";

export const authUser = expressAsyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({email});

  if (user && (await user.matchPassword(password))) {
    const token = generateToken(user._id);
    res.json({ user, token });
  } else {
    res.status(401);
    throw new Error("Не верный email или пароль");
  }
});
