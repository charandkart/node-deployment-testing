import { Router } from "express";
import { CartService } from "../../service/cart.service";

const router = Router();

router.get("/all", async (req, res, next) => {
  try {
    const cartService = new CartService();
    const [records, page, limit, count] = await cartService.getAllCartItems(
      req.query
    );

    return res.status(200).json({
      msg: "Success",
      data: {
        data: records,
        pagination: {
          page: page,
          limit: limit,
          totalRecords: count,
        },
      },
    });
  } catch (error) {
    res.status(400).json({ msg: "Failed while getting all carts", data: null });
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    res.status(200).json({
      msg: "Success",
      data: { id: id, items: [1, 2, 3] },
    });
  } catch (error) {
    res.status(400).json({ msg: "Failed while getting cart", data: null });
  }
});

router.post("/new", async (req, res, next) => {
  try {
    res.status(200).json({
      msg: "Added New Cart",
      data: [{ id: 3, items: [4] }],
    });
  } catch (error) {
    res.status(400).json({ msg: "Failed while adding new cart", data: null });
  }
});

export default router;
