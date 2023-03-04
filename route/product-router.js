import express from "express";
const router = express.Router();
import {
  createProduct,
  deleteProduct,
  getOneProduct,
  getProduct,
  updateProduct,
} from "../services/product-services.js";

//GET ALL PRODUCTS
router.get("/", async (req, res) => {
  try {
    res.json(await getProduct());
  } catch (error) {
    res.status(400).json(error.message);
  }
});

//GET ONE PRODUCT

router.get("/:id", async (req, res) => {
  const { id } = req.params;
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

//DELETE_PRODUCT
router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    res.json(await deleteProduct(id));
  } catch (error) {
    res.status(400).json("Something went wrong");
  }
});

//UPDATE | PATCH
router.patch("/:id", async (req, res) => {
  const { id } = req.params;
  const { name, description, price } = req.body;
  try {
    res.json(await updateProduct(name, description, price, id));
  } catch (error) {
    res.status(400).json("Something went wrong");
  }
});

export default router;
