import pool from "../config/mysql-config.js";
import { nanoid } from "nanoid";
//GET ALL USERS
export const getUser = async () => {
  const [result] = await pool.query("SELECT * FROM user");
  return result;
};
//GET USER BY ID
export const getOneUser = async (id) => {
  const [result] = await pool.query(`SELECT * FROM user WHERE userId=?`, [id]);
  const user = result.length ? result[0] : null;
  return user;
};

//POST
export const createUser = async (user) => {
  const id = nanoid();
  try {
    await pool.query(
      `INSERT INTO user (userId, firstName, lastName, birthDate, email, phone, password, imageUrl, createdAt) VALUES (?,?,?,?,?,?,?,?,?)`,
      [
        id,
        user.firstName,
        user.lastName,
        user.birthDate,
        user.email,
        user.phone,
        user.password,
        user.imageUrl,
        new Date(),
      ]
    );
    const result = await getOneUser(id);
    return result;
  } catch (error) {
    console.error(error);
    return null;
  }
};
//DELETE
export const deleteUser = async (id) => {
  try {
    await pool.query(`DELETE FROM user WHERE id=?`, [id]);
  } catch (error) {
    console.log(error);
    return null;
  }
};
//UPDATE
export const updateUser = async (user) => {
  try {
    await pool.query(
      `UPDATE user SET firstName=?, lastName=?, birthDate=?, email=?, phone=?, password=?, imageUrl=? updatedAt=? where userId=?`,
      [
        user.firstName,
        user.lastName,
        user.birthDate,
        user.email,
        user.phone,
        user.password,
        user.imageUrl,
        new Date(),
        user.id,
      ]
    );
    const result = await getUser(id);
    return result;
  } catch (error) {
    console.log(error);
    return null;
  }
};
