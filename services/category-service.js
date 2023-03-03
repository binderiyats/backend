import pool from "../config/mysql-config.js";

//GetAll
export const getCategory = async () => {
  const [result] = await pool.query(`SELECT * FROM category`);
  return result;
};

//GetOne
export const getOneCategory = async (id) => {
  const [[result]] = await pool.query(`SELECT * FROM category WHERE id=?`, [
    id,
  ]);
  return result;
};

//Insert
export const createCategory = async (name, slug, imageUrl, productCount) => {
  const [result] = await pool.query(
    `INSERT INTO category (name, slug, imageUrl, productCount, createdAt) VALUES (?,?,?,?,now())`,
    [name, slug, imageUrl, productCount]
  );
  return result;
};

//Delete
export const deleteCategory = async (id) => {
  const [result] = await pool.query(`DELETE FROM category WHERE id=?`, [id]);
  return result;
};

//Update
export const updateCategory = async (
  name,
  slug,
  imageUrl,
  productCount,
  id
) => {
  const [result] = await pool.query(
    `UPDATE category SET name=?,slug=?, imageUrl=?, productCount=? WHERE id=?`,
    [name, slug, imageUrl, productCount, id]
  );
  return result;
};
