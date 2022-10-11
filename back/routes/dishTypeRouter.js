import express from "express";
import { protect } from "../middleware/authMiddleware.js";
import { dishTypeCreate } from "../controllers/dishType/dishTypeCreate.js";
import { getDishType } from "../controllers/dishType/getDishTupe.js";
import { updateDishType } from "../controllers/dishType/updateDishType.js";
import { deleteDishType } from "../controllers/dishType/deleteDishType.js";

const router = express.Router();

router.route("/").post(protect, dishTypeCreate);
router.route("/:id").get(getDishType).put(updateDishType).delete(deleteDishType);

export default router;
