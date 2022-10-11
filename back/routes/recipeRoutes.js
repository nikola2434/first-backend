import express from "express";
import { recipeCreate } from "../controllers/recipe/recipeCreat.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.route("/").post(protect, recipeCreate);

export default router;
