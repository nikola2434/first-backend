import expressAsyncHandler from "express-async-handler";
import Recipe from "../../modulels/recipeModel.js";

export const updateRecipe = expressAsyncHandler(async (req, res) => {
  const currentRecipe = await Recipe.findById(req.params.id);
  const { title, description, ingredients } = req.body;

  currentRecipe[title] = title;
  currentRecipe[description] = description;
  currentRecipe[ingredients] = ingredients;

  const newRecipe = await currentRecipe.save();
  res.json(newRecipe);
});
