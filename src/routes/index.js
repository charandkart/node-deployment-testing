import { Router } from "express";

import cartRoutes from "./cart";
import checkoutRoutes from "./checkout";

const router = Router();

router.use("/cart", cartRoutes);
router.use("/checkout", checkoutRoutes);

export default router;
