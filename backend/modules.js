import mongoose from "mongoose";

const adminSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  courseCollection: {
    type: Array,
    default: [],
  },
});

const Admin = mongoose.model("Admin", adminSchema);
Admin.createIndexes();

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  purchasedCourses: {
    type: Array,
    default: [],
  },
});

const User = mongoose.model("User", userSchema);
User.createIndexes();

const trainSchema = new mongoose.Schema({
  trainRunsOnWed: String,
  trainRunsOnFri: String,
  stationList: [
    {
      departureTime: String,
      stationCode: String,
      haltTime: String,
      dayCount: String,
      routeNumber: String,
      distance: String,
      arrivalTime: String,
      stationName: String,
      stnSerialNumber: String,
    },
  ],
  serverId: String,
  trainNumber: Number,
  stationFrom: String,
  trainRunsOnSat: String,
  trainRunsOnMon: String,
  trainRunsOnSun: String,
  stationTo: String,
  trainRunsOnThu: String,
  timeStamp: String,
  trainName: String,
  trainRunsOnTue: String,
  errorMessage: String,
});

const Train = mongoose.model("Train", trainSchema);
Train.createIndexes();

export { User, Admin, Train };
