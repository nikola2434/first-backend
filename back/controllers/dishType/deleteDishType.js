import expressAsyncHandler from "express-async-handler";
import DishType from "../../modulels/dishType.js";

export const deleteDishType = expressAsyncHandler(async (req, res) => {
  const currentDishType = await DishType.findById(req.params.id);

  currentDishType.remove();
  res.json({ message: "Тип блюда успешно удален" });
});
