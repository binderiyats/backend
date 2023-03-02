import { createPool } from "mysql2";
const pool = createPool({
  host: "localhost",
  user: "root",
  port: 3306,
  password: "",
  database: "test1",
}).promise();

export default pool;
