import { Test } from "../model/Test.scema";

export class CartService {
  constructor() {}

  getAllCartItems = async (query) => {
    try {
      const { page = 0, limit = 10 } = query;
      const _page = Math.max(parseInt(page), 0);
      const _limit = Math.max(parseInt(limit), 0);

      const queryString = {};
      const records = await Test.find(queryString)
        .skip(_page * _limit)
        .limit(_limit);
      const counts = await Test.countDocuments(queryString);

      return [records, page, limit, counts];
    } catch (error) {
      throw error;
    }
  };

  createNewCart = async (payload) => {
    try {
      const { name } = payload;

      if (!name) return new Error("Name is required..!!");
      const newData = new Test({
        name: name,
      });

      await newData.save();

      return newData;
    } catch (error) {
      throw error;
    }
  };

  getByCartId = async (id) => {
    try {
      const data = await Test.findById(id);

      if (!data) throw new Error("Cart Id doesnot exist");

      return data;
    } catch (error) {
      throw error;
    }
  };

  updateByCartId = async (id, payload) => {
    try {
      const data = await this.getByCartId(id);

      if (!data) throw new Error("Cart Id doesnot exist");

      const updatedData = await Test.findOneAndUpdate(
        {
          _id: id,
        },
        {
          $set: {
            modified_on: Date.now(),
          },
          $inc: {
            update_count: 1,
          },
        },
        { new: true }
      );
      return updatedData;
    } catch (error) {
      throw error;
    }
  };

  deleteById = async (id) => {
    try {
      const data = await this.getByCartId(id);

      if (!data) throw new Error("Cart Id doesnot exist");

      await Test.findByIdAndDelete(id);
      return "Deleted Successfully";
    } catch (error) {
      throw error;
    }
  };
}
