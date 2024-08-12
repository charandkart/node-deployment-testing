import "dotenv/config";
import express from "express";
import { initializeDB } from "./db";
import routes from "./routes";

const PORT = process.env.PORT || 8000;
const app = express();

initializeDB();

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/about", (req, res) => {
  res.send("About route 🎉 ");
});

app.use("/api", routes);

app.listen(PORT, () => {
  console.log(`✅ Server is running on port ${PORT}`);
});
