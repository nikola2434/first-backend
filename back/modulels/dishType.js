import mongoose from "mongoose";

const { ObjectId } = mongoose.Schema;

const dishTypeSchema = mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    recipes: { type: [{ type: ObjectId, ref: "Recipe" }], required: true },
  },
  { minimize: false, timestamps: true }
);

const DishType = mongoose.model("DishType", dishTypeSchema);

export default DishType;
