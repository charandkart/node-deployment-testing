import { Router } from "express";
import { cartController } from "../../controller/cart.controller";
import { CartService } from "../../service/cart.service";

const router = Router();

router.get("/all", cartController.getAllCarts);

router.post("/new", cartController.createNewCart);

router.get("/:id", cartController.getByCartId);

router.put("/:id", cartController.updateByCartId);

router.delete("/:id", cartController.deleteByCartId);

export default router;
