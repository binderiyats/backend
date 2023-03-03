import express from "express";
const router = express.Router();
import {
  createProduct,
  getOneProduct,
  getProduct,
} from "../services/product-services.js";

//Get All
router.get("/", async (req, res) => {
  try {
    res.json(await getProduct());
  } catch (error) {
    res.status(400).json("Something went wrong");
  }
});

//Get One

router.get("/:id", async (req, res) => {
  try {
    res.json(await getOneProduct(id));
  } catch (error) {
    res.status(400).json("Something went wrong");
  }
});

//INSERT | POST
router.post("/", async (req, res) => {
  const { name, description, price } = req.body;
  try {
    res.json(await createProduct(name, description, price));
  } catch (error) {
    res.status(400).json("Something went wrong");
  }
});
export default router;
