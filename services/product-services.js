import pool from "../config/mysql-config.js";

//Get All
export const getProduct = async () => {
  const [result] = await pool.query(`SELECT * FROM product`);
  return result;
};

//Get_One_PRODUCT
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
