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
}
