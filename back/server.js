import express from "express";
import morgan from "morgan";
import colors from "colors";
import dotenv from "dotenv";

import userRoutes from "./routes/userRoutes.js";
import recipeRoutes from "./routes/recipeRoutes.js";
import dishTypeRouter from "./routes/dishTypeRouter.js";

import { connectDB } from "./config/db.js";
import {
  middlewareError,
  notFoundError,
} from "./middleware/middleWareError.js";

dotenv.config();

connectDB();

const app = express();

if (process.env.NODE_ENV === "DEVELOPMENT") {
  app.use(morgan("dev"));
}

app.use(express.json());

app.use("/api/users", userRoutes);
app.use("/api/recipe", recipeRoutes);
app.use("/api/dishType", dishTypeRouter);

app.use(notFoundError);
app.use(middlewareError);

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log("Server start!".green.bold));
