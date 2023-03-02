import express, { json } from "express";
import cors from "cors";
import userRouter from "./route/user-router.js";

const app = express();
app.use(cors());
app.use(json());

app.use("/user", userRouter);

app.listen(8000, () => {
  console.log("http://localhost:8000");
});
