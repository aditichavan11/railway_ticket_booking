import express from "express"
import { Train } from "../modules.js";
import mongoose from "mongoose";

const router = express.Router();

router.post("/searchTrains", async (req, res) => {
  try {
    const source = req.body.source;
    const destination = req.body.destination;
    console.log(req.body);
    
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



// (get request) try using http://localhost:8000/trains/train/65292b742cb920a9034a82cb
router.get("/train/:train_id", async (req, res) => {
  const trainId = req.params.train_id;
  const ObjectId = mongoose.Types.ObjectId;

  try {
    const objectId = new ObjectId(trainId); // Create a new ObjectId instance
    const train = await Train.find({ _id: objectId }).select("-stationList");
    res.send({ train });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }

});


export default router;