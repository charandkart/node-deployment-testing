import "dotenv/config";
import config from "config";
import jwt from "jsonwebtoken";

const ALLOWED_API_KEYS = config.get("api_keys") || process.env.API_KEYS;

export const auth = async (req, res, next) => {
  if (req.method === "GET") {
    next();
    return;
  }

  const token = req.header("x-auth-token");

  if (!token) {
    const API_KEY = req.header("API-KEY");

    if (ALLOWED_API_KEYS?.includes(API_KEY)) {
      next();
      return;
    } else {
      return res.status(401).json({ msg: "No Token, Authorization denied" });
    }
  }

  try {
    const decode = jwt.verify(token, config.get("jwt_secret"));

    req.user = decode;
    next();
  } catch (e) {
    res.status(400).json({ msg: "Invalid Token" });
  }
};

export const checkAPIkey = async (req, res, next) => {
  try {
    const API_KEY = req.header("API-KEY");

    if (ALLOWED_API_KEYS?.includes(API_KEY)) {
      next();
      return;
    } else return res.status(401).json({ msg: "Invalid API Key" });
  } catch (e) {
    res.status(400).json({ msg: "Failed while validating API KEY" });
  }
};
