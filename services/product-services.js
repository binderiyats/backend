import pool from "../config/mysql-config.js";

//Get All
export const getProduct = async () => {
  const [result] = await pool.query(`SELECT * FROM product`);
  return result;
};

//GET_ONE_PRODUCT
export const getOneProduct = async (id) => {
  const [result] = await pool.query(`SELECT * FROM product WHERE id=?`, [id]);
  return result;
};

//INSERT | POST

export const createProduct = async (name, description, price) => {
  const [result] = await pool.query(
    `INSERT INTO product (name, description, price, createdAt) VALUES (?,?,?,now())`,
    [name, description, price]
  );
  return result;
};

//DELETE_PRODUCT
export const deleteProduct = async (id) => {
  const [result] = await pool.query(`DELETE FROM product WHERE id=?`, [id]);
  return result;
};

//UPDATE | PATCH
export const updateProduct = async (name, description, price, id) => {
  const [result] = await pool.query(
    `UPDATE product SET name=?, description=?, price=? WHERE id=?`,
    [name, description, price, id]
  );
  return result;
};
