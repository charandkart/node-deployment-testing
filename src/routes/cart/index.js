import { Router } from "express";
import { cartController } from "../../controller/cart.controller";
import { validateObjectId } from "../../middleware/validations";

const router = Router();

router.get("/all", cartController.getAllCarts);

router.post("/new", cartController.createNewCart);

router.get("/:id", validateObjectId, cartController.getByCartId);

router.put("/:id", validateObjectId, cartController.updateByCartId);

router.delete("/:id", validateObjectId, cartController.deleteByCartId);

export default router;
