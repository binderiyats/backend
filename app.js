import express, { json } from "express";
import cors from "cors";
import userRouter from "./route/user-router.js";
import categoryRouter from "./route/category-router.js";
import productRouter from "./route/product-router.js";

const app = express();
app.use(cors());
app.use(json());

// USER
app.use("/user", userRouter);

// CATEGORY
app.use("/category", categoryRouter);

//PRODUCT
app.use("/product", productRouter);

app.listen(8000, () => {
  console.log("http://localhost:8000");
});
