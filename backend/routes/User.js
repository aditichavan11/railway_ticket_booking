<<<<<<< HEAD

import { Router } from "express";
import { User } from "../modules.js";
import { Admin } from "../modules.js";
=======
import { Router } from "express";
import { User } from "../modules.js";
>>>>>>> 2d1ffae850d03db36879239ae3ec92cffe73fd0e
import jwt from "jsonwebtoken";
const secreti = "c4d3tu";

const router = Router();

<<<<<<< HEAD
// router.post("/signup", async (req, res) => {
//   console.log("Received POST request to /signup");
//   // Rest of the route handling logic
// });

// User routes
router.post("/signup", async (req, res) => {
  try {
    const  firstname =req.body.firstname;
    const lastname = req.body.lastname;
    const phoneno= req.body.phoneno; 
    const email = req.body.email; 
    const aadharno = req.body.aadharno; 
    const username = req.body.username; 
    const password = req.body.password; 
    // console.log(req.body)
   
=======
// User routes
router.post("/signup", async (req, res) => {
  try {
    const { username, password } = req.body;
>>>>>>> 2d1ffae850d03db36879239ae3ec92cffe73fd0e

    const isUserPresent = await User.findOne({ username });
    if (isUserPresent) {
      return res.status(422).json({ message: "Username not available" });
    }

    const newUser = new User({
<<<<<<< HEAD
      firstname: firstname, 
      lastname : lastname, 
      phoneno : phoneno, 
      email:email, 
      aadharno:aadharno, 
      username:username, 
      password: password
=======
      username,
      password,
>>>>>>> 2d1ffae850d03db36879239ae3ec92cffe73fd0e
    });

    await newUser.save();
    const token = jwt.sign({ username }, secreti, {
      expiresIn: "1h",
    });

<<<<<<< HEAD
      res.status(201).json({
=======
    res.status(201).json({
>>>>>>> 2d1ffae850d03db36879239ae3ec92cffe73fd0e
      message: "User created successfully",
      token,
    });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
});

router.post("/login", async (req, res) => {
<<<<<<< HEAD

=======
>>>>>>> 2d1ffae850d03db36879239ae3ec92cffe73fd0e
  const { username, password } = req.body;
  const isUserPresent = await User.findOne({ username });
  if (!isUserPresent) {
    res.status(404).send("User not found, sign in");
  }

<<<<<<< HEAD
  if (isUserPresent.username === username) 
  {
=======
  if (isUserPresent.password === password) {
>>>>>>> 2d1ffae850d03db36879239ae3ec92cffe73fd0e
    const token = jwt.sign({ username }, secreti, { expiresIn: "1h" });
    res.status(200).json({
      message: "Logged in successfully",
      token: token,
    });
  }
  res.status(401).send("Wrong credentials");
<<<<<<< HEAD
//   const username=req.body.username;
//   const password=req.body.password;
//   console.log(username);
//   console.log(password);
//   try{
//   const login = new Login({
//   username: username,
//   password: password
//   });
//   login.save();
//   res.status(200).json({'message':'Succesfully saved a information'});


// }catch(err){
//   res.status(500).json({'message':'failed'});

}
);


router.post("/passengerform", async (req, res) => {
  try {
    const  name =req.body.name;
    const age = req.body.age;
    const gender= req.body.gender; 
    const preference = req.body.preference; 
    const noofpassengers = req.body.noofpassengers; 
    
    // console.log(req.body)
   

   

    const newAdmin = new Admin({
      name: name, 
      age : age, 
      gender : gender, 
      preference: preference, 
      noofpassengers: noofpassengers, 
      
    });

    await newAdmin.save();
    
      
      res.status(201).json({
      message: "Passenger Information added successfully",
      
    });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
=======
>>>>>>> 2d1ffae850d03db36879239ae3ec92cffe73fd0e
});



<<<<<<< HEAD
  




export default router;
=======
export default router;
>>>>>>> 2d1ffae850d03db36879239ae3ec92cffe73fd0e
