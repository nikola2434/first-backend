import expressAsyncHandler from "express-async-handler";
import DishType from "../../modulels/dishType.js";

export const dishTypeCreate = expressAsyncHandler(async (req, res) => {
  const { title, description, recipes } = req.body;
  const dishType = await DishType.create({ title, description, recipes });
  res.json(dishType);
});
