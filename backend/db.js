import mongoose from "mongoose";

const connectUrl =
  "mongodb+srv://prathamesh:AlcYll1vZIcdAkGG@cluster0.zxts4h4.mongodb.net/pawar";

function connectToMongo() {
  mongoose.connect(connectUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: "pawar",
  });

  // Check the connection status
  const db = mongoose.connection;

  db.on("error", (err) => {
    console.error("MongoDB connection error:", err);
  });

  db.once("open", () => {
    // Access the database name from the connection object
    const dbName = mongoose.connection.name;
    console.log(`Connected to MongoDB. Database name: ${dbName}`);
  });
}
<<<<<<< HEAD
export default connectToMongo;
=======

export default connectToMongo;
>>>>>>> 2d1ffae850d03db36879239ae3ec92cffe73fd0e
