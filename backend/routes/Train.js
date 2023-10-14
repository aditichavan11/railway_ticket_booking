import express from "express"
import { Train } from "../modules.js";

const router = express.Router();

router.post("/searchTrains", async (req, res) => {
  try {
    const {source, destination} = req.body;
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


router.get("/getFirst10Documents", async (req, res) => {
  try {
    const first10Documents = await Train.find()
      .select("-stationList") // Exclude the stationList field
      .limit(10);
      

    res.send({ first10Documents });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

export default router;