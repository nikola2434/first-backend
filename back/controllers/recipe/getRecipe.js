import expressAsyncHandler from "express-async-handler";
import Recipe from "../../modulels/recipeModel.js";

export const getRecipe = expressAsyncHandler(async (req, res) => {
  const recipe = await Recipe.findById(req.params.id);
  res.json(recipe);
});
