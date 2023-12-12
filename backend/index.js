import express from "express"
import cors from "cors";
<<<<<<< HEAD
import multer from "multer";
import connectToMongo from "./db.js";
import trainRouter from "./routes/Train.js"
import userRouter from "./routes/User.js"
=======
import connectToMongo from "./db.js";
import trainRouter from "./routes/Train.js"
>>>>>>> 2d1ffae850d03db36879239ae3ec92cffe73fd0e

const app = express();

app.use(express.json());
app.use(cors());
connectToMongo();

// Router
<<<<<<< HEAD
app.use("/trains", trainRouter);

app.use("/api", userRouter);
=======
app.use("/trains/", trainRouter);
>>>>>>> 2d1ffae850d03db36879239ae3ec92cffe73fd0e


app.listen(8000, () => {
  console.log("Server is listening on port 8000");
<<<<<<< HEAD
});
=======
});
>>>>>>> 2d1ffae850d03db36879239ae3ec92cffe73fd0e
