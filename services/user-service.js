import pool from "../config/mysql-config.js";

export const getUser = async () => {
  const [result, columns] = await pool.query("SELECT * FROM user");
  return result;
};

export const getOneUser = async (id) => {
  const [[result]] = await pool.query(`SELECT * FROM user WHERE id=?`, [id]);
  return result;
};

export const createUser = async (name, email, number, address) => {
  const [result] = await pool.query(
    `INSERT INTO user (name, email, number, address) VALUES (?,?,?,?)`,
    [name, email, number, address]
  );
  return result;
};

export const deleteUser = async (id) => {
  const [result] = await pool.query(`DELETE FROM user WHERE id=?`, [id]);
  return result;
};

export const updateUser = async (name, email, number, address) => {
  const [result] = await pool.query(
    `UPDATE user SET name=?,email=?, number=?, address=? WHERE id=?`,
    [name, email, number, address, id]
  );
  return result;
};
