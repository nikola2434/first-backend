import express from "express";
import { registerUser } from "../controllers/user/registerUser.js";
import getUserProfile from "../controllers/user/userProfile.js";

const router = express.Router();

router.route("/profile").get(getUserProfile);
router.route("/").post(registerUser);

export default router;
