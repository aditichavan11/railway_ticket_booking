
import mongoose from "mongoose";

const adminSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  preference: {
    type: String,
    required: true,
  },
  noofpassengers: {
    type: String,
    required: true,
  },
});

const Admin = mongoose.model("Admin", adminSchema);
Admin.createIndexes();

//user login
const userSchema = new mongoose.Schema({
  firstname:{
    type: String,
    required: true,
  },
  lastname:{
    type: String,
    required: true,
  },
  phoneno:{
    type: Number,
    required: true,
  },
  email:{
    type: String,
    required: true,
  },
  aadharno:{
    type: Number,
    required: true,
  },
  username: {
    type: String, 
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  
});

const User = mongoose.model("User", userSchema);
User.createIndexes();


//train schema
const trainSchema = new mongoose.Schema({
  date:{
    type: Date,
    required:true,

  },
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





