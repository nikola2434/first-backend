import mongoose from "mongoose";

const recipeSchema = mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    ingredients: { type: [{ type: String, required: true }], required: true },
  },
  { minimize: false, timestamps: true }
);

const Recipe = mongoose.model("Recipe", recipeSchema);

export default Recipe;
