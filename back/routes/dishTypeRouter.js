
import express from "express";
import { protect } from "../middleware/authMiddleware.js";
import { dishTypeCreate } from "../controllers/dishType/dishTypeCreate.js";

const router = express.Router();

router.route("/").post(protect, dishTypeCreate);

export default router;
