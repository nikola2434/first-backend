import express from "express";
import { deleteRecipe } from "../controllers/recipe/deleteRecipe.js";
import { getRecipe } from "../controllers/recipe/getRecipe.js";
import { recipeCreate } from "../controllers/recipe/recipeCreat.js";
import { updateRecipe } from "../controllers/recipe/updateRecipe.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.route("/").post(protect, recipeCreate);
router.route("/:id").post(getRecipe).delete(deleteRecipe).put(updateRecipe);

export default router;
