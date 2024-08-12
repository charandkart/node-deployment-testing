import { CartService } from "../service/cart.service";

export const cartController = {
  getAllCarts: async (req, res, next) => {
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
      res
        .status(400)
        .json({ msg: "Failed while getting all carts", data: null });
    }
  },
  createNewCart: async (req, res, next) => {
    try {
      const cartService = new CartService();
      const data = cartService.createNewCart(req.body);

      return res.status(201).json({
        msg: "Created Successfully",
        data: data,
      });
    } catch (error) {
      res.status(400).json({ msg: "error", error: error });
    }
  },
  getByCartId: async (req, res, next) => {
    try {
      const cartService = new CartService();
      const data = cartService.getByCartId(req.params.id);

      return res.status(200).json({
        msg: "Success",
        data: data,
      });
    } catch (error) {
      res.status(400).json({ msg: "error", error: error });
    }
  },
  updateByCartId: async (req, res, next) => {
    try {
      const cartService = new CartService();
      const data = cartService.updateByCartId(req.params.id, req.body);

      return res.status(200).json({
        msg: "Success",
        data: data,
      });
    } catch (error) {
      res.status(400).json({ msg: "error", error: error });
    }
  },
  deleteByCartId: async (req, res, next) => {
    try {
      const cartService = new CartService();
      const data = cartService.deleteById(req.params.id);

      return res.status(200).json({
        msg: "Success",
        data: data,
      });
    } catch (error) {
      res.status(400).json({ msg: "error", error: error });
    }
  },
};
