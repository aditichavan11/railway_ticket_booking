import express from "express"
import cors from "cors";
import multer from "multer";
import connectToMongo from "./db.js";
import trainRouter from "./routes/Train.js"
import userRouter from "./routes/User.js"

const app = express();

app.use(express.json());
app.use(cors());
connectToMongo();

// Router
app.use("/trains", trainRouter);

app.use("/api", userRouter);


app.listen(8000, () => {
  console.log("Server is listening on port 8000");
});