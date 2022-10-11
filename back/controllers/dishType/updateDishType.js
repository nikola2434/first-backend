import expressAsyncHandler from "express-async-handler";
import DishType from "../../modulels/dishType.js";

export const updateDishType = expressAsyncHandler(async (req, res) => {
  const currentDishType = await DishType.findById(req.params.id);
  const { title, description, recipes } = req.body;
  currentDishType.title = title;
  currentDishType.description = description;
  currentDishType.recipes = recipes;

  const newDishType = await (await currentDishType.save()).populate("recipes");
  res.json(newDishType);
});
