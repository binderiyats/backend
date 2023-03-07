import express from "express";
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
  res.json(await getOneUser(id));
});

//Post
router.post("/", async (req, res) => {
  const { firstName, lastName, birthDate, email, phone, password, imageUrl } =
    req.body;

  const user = await createUser({
    firstName,
    lastName,
    birthDate,
    email,
    phone,
    password,
    imageUrl,
  });

  res.json(user);
});

//Delete
router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  res.json(await deleteUser(id));
});

//Patch
router.patch("/:id", async (req, res) => {
  const { id } = req.params;
  const { firstName, lastName, birthDate, email, phone, password, imageUrl } =
    req.body;

  res.json(
    updateUser({
      firstName,
      lastName,
      birthDate,
      email,
      phone,
      password,
      imageUrl,
      id,
    })
  );
});

export default router;
