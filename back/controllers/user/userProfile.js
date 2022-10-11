import User from "../../modulels/UserModel.js";
import expressAsyncHandler from "express-async-handler";

export const getUserProfile = expressAsyncHandler(async (req, res, next) => {
  const user = await User.findById(req.user._id);
  res.json(user);
});
