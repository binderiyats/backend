import express from "express";
import {
  createCategory,
  deleteCategory,
  getCategory,
  getOneCategory,
  updateCategory,
} from "../services/category-service.js";
const router = express.Router();

//GetAll
router.get("/", async (req, res) => {
  try {
    res.json(await getCategory());
  } catch (error) {
    res.status(400).json("Something went wrong");
  }
});

//GetOneCategory
router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    res.json(await getOneCategory(id));
  } catch (err) {
    res.status(400).json("Something went wrong");
  }
});

//Insert / Post
router.post("/", async (req, res) => {
  const { name, slug, imageUrl, productCount } = req.body;
  try {
    res.json(await createCategory(name, slug, imageUrl, productCount));
  } catch (error) {
    res.status(400).json("Something went wrong");
  }
});

//Delete
router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    res.json(await deleteCategory(id));
  } catch (error) {
    res.status(400).json("Something went wrong");
  }
});

//Update
router.patch("/:id", async (req, res) => {
  const { id } = req.params;
  const { name, slug, imageUrl, productCount } = req.body;

  try {
    res.json(await updateCategory(name, slug, imageUrl, productCount, id));
  } catch (error) {
    res.status(400).json(error.message);
  }
});
export default router;
