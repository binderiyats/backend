const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");

const pool = mysql
  .createPool({
    host: "localhost",
    user: "root",
    port: 3306,
    password: "",
    database: "test1",
  })
  .promise();
const app = express();
app.use(cors());
app.use(express.json());

// getAll
app.get("/", async (req, res) => {
  const [result, columns] = await pool.query("SELECT * FROM user");
  console.log(result);

  res.json(result);
});

//getOne
app.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const [[result]] = await pool.query(`SELECT * FROM user WHERE id=?`, [id]);
    res.json(result);
  } catch (err) {
    res.status(400).json("Someting went wrong");
  }
});

//Post
app.post("/", async (req, res) => {
  const { name, email, number, address } = req.body;
  try {
    const [result] = await pool.query(
      `INSERT INTO user (name, email, number, address) VALUES (?,?,?,?)`,
      [name, email, number, address]
    );
    res.json(result);
  } catch (err) {
    res.status(400).json("Someting went wrong");
  }
});

//Delete
app.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const [result] = await pool.query(`DELETE FROM user WHERE id=?`, [id]);
    res.json(result);
  } catch (err) {
    res.status(400).json("Something went wrong");
  }
});

//Patch
app.patch("/:id", async (req, res) => {
  const { id } = req.params;
  const { name, email, number, address } = req.body;
  try {
    const [result] = await pool.query(
      `UPDATE user SET name=?,email=?, number=?, address=? WHERE id=?`,
      [name, email, number, address, id]
    );
    res.json(result);
  } catch (error) {
    res.status(400).json("Someting went wrong");
  }
});

app.listen(8000, () => {
  console.log("http://localhost:8000");
});
