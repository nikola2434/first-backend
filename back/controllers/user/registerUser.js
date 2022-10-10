import expressHandler from "express-async-handler";
import User from "../../modulels/UserModel.js";

export const registerUser = expressHandler(async (req, res) => {
  const { email, password, age, name } = req.body;

  const isUser = await User.findOne({ email });
  if (isUser) {
    throw new Error("Этот пользователь уже зарегистрирован");
  }

  const user = await User.create({ email, password, age, name });

  res.json(user);
});
