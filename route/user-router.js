import express from "express";
import pool from "../config/mysql-config.js";
import {
  createUser,
  deleteUser,
  getOneUser,
  getUser,
  updateUser,
} from "../services/user-service.js";

const router = express.Router();

// getAll
router.get("/", async (req, res) => {
  res.json(await getUser());
});

//getOne
router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    res.json(await getOneUser(id));
  } catch (err) {
    res.status(400).json("Someting went wrong");
  }
});

//Post
router.post("/", async (req, res) => {
  const { name, email, number, address } = req.body;
  try {
    res.json(await createUser(name, email, number, address));
  } catch (err) {
    res.status(400).json("Someting went wrong");
  }
});

//Delete
router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    res.json(await deleteUser(id));
  } catch (err) {
    res.status(400).json("Something went wrong");
  }
});

//Patch
router.patch("/:id", async (req, res) => {
  const { id } = req.params;
  const { name, email, number, address } = req.body;
  try {
    res.json(updateUser(name, email, number, address, id));
  } catch (error) {
    res.status(400).json("Someting went wrong");
  }
});

export default router;
