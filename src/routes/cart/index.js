import { Router } from "express";

const router = Router();

router.get("/all", async (req, res, next) => {
  try {
    res.status(200).json({
      msg: "Success",
      data: [
        { id: 1, items: [1, 2, 3] },
        { id: 2, items: [1] },
      ],
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
