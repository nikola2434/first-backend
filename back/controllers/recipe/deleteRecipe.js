import expressAsyncHandler from "express-async-handler";
import Recipe from "../../modulels/recipeModel.js";

export const deleteRecipe = expressAsyncHandler(async (req, res) => {
  const currentRecipe = await Recipe.findById(req.params.id);

  currentRecipe.remove();

  res.json({ message: "Рецепт успешно удален" });
});
