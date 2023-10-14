import express from "express"
import cors from "cors";
import connectToMongo from "./db.js";
import trainRouter from "./routes/Train.js"

const app = express();

app.use(express.json());
app.use(cors());
connectToMongo();

// Router
app.use("/trains/", trainRouter);


app.listen(8000, () => {
  console.log("Server is listening on port 8000");
});
