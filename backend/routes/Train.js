import express from "express"
import { Train } from "../modules.js";
<<<<<<< HEAD
import mongoose from "mongoose";
=======
>>>>>>> 2d1ffae850d03db36879239ae3ec92cffe73fd0e

const router = express.Router();

router.post("/searchTrains", async (req, res) => {
  try {
<<<<<<< HEAD
    const source = req.body.source;
    const destination = req.body.destination;
    console.log(req.body);
    
=======
    const {source, destination} = req.body;
>>>>>>> 2d1ffae850d03db36879239ae3ec92cffe73fd0e
    const trains = await Train.find({
      stationFrom: source.toUpperCase(), // Convert to uppercase
      stationTo: destination.toUpperCase(), // Convert to uppercase
    }).select("-stationList");

    if (trains.length === 0) {
      return res
        .status(404)
        .json({
          message: "No trains found for the given source and destination.",
        });
    }

    // Send the retrieved data as a response
    res.status(200).json({trains});
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }

});


<<<<<<< HEAD

// (get request) try using http://localhost:8000/trains/train/65292b742cb920a9034a82cb
router.get("/train/:train_id", async (req, res) => {
  const trainId = req.params.train_id;
  const ObjectId = mongoose.Types.ObjectId;

  try {
    const objectId = new ObjectId(trainId); // Create a new ObjectId instance
    const train = await Train.find({ _id: objectId }).select("-stationList");
    res.send({ train });
=======
router.get("/getFirst10Documents", async (req, res) => {
  try {
    const first10Documents = await Train.find()
      .select("-stationList") // Exclude the stationList field
      .limit(10);
      

    res.send({ first10Documents });
>>>>>>> 2d1ffae850d03db36879239ae3ec92cffe73fd0e
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
<<<<<<< HEAD

});


=======
});

>>>>>>> 2d1ffae850d03db36879239ae3ec92cffe73fd0e
export default router;