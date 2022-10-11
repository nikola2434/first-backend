import expressAsyncHandler from "express-async-handler";
import DishType from "../../modulels/dishType.js";

export const getDishType = expressAsyncHandler(async (req, res) => {
  console.log(req.params.id);
  const dishType = await DishType.findById(req.params.id).populate("recipes");
  res.json(dishType);
});
