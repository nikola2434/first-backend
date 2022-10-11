import expressAsyncHandler from "express-async-handler";
import Recipe from "../../modulels/recipeModel.js";

export const recipeCreate = expressAsyncHandler(async (req, res) => {
  const { title, description, ingredients } = req.body;
  const recipe = await Recipe.create({ title, description, ingredients });
  res.json(recipe);
});
