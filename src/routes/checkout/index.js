import { Router } from "express";

const router = Router();

router.get("/all", async (req, res, next) => {
  try {
    res.status(200).json({
      msg: "Success",
      data: [
        { id: 1, cart_id: 1 },
        { id: 2, cart_id: 2 },
      ],
    });
  } catch (error) {
    res
      .status(400)
      .json({ msg: "Failed while getting all checkouts", data: null });
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    res.status(200).json({
      msg: "Success",
      data: { id: id, cart_id: 1 },
    });
  } catch (error) {
    res.status(400).json({ msg: "Failed while getting checkout", data: null });
  }
});

router.post("/new", async (req, res, next) => {
  try {
    res.status(200).json({
      msg: "Added New Checkout",
      data: { id: 3, cart_id: 4 },
    });
  } catch (error) {
    res
      .status(400)
      .json({ msg: "Failed while adding new checkout", data: null });
  }
});

export default router;
