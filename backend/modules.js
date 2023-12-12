import mongoose from "mongoose";

const adminSchema = new mongoose.Schema({
<<<<<<< HEAD
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
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
    type: Number,
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
=======
  username: {
    type: String,
>>>>>>> 2d1ffae850d03db36879239ae3ec92cffe73fd0e
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
<<<<<<< HEAD
  
=======
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
>>>>>>> 2d1ffae850d03db36879239ae3ec92cffe73fd0e
});

const User = mongoose.model("User", userSchema);
User.createIndexes();

<<<<<<< HEAD

//train schema
const trainSchema = new mongoose.Schema({
  date:{
    type: Date,
    required:true,

  },
=======
const trainSchema = new mongoose.Schema({
>>>>>>> 2d1ffae850d03db36879239ae3ec92cffe73fd0e
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
<<<<<<< HEAD





=======
>>>>>>> 2d1ffae850d03db36879239ae3ec92cffe73fd0e
