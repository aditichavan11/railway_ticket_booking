import { Router } from "express";
import { User } from "../modules.js";
import jwt from "jsonwebtoken";
const secreti = "c4d3tu";

const router = Router();

// User routes
router.post("/signup", async (req, res) => {
  try {
    const { username, password } = req.body;

    const isUserPresent = await User.findOne({ username });
    if (isUserPresent) {
      return res.status(422).json({ message: "Username not available" });
    }

    const newUser = new User({
      username,
      password,
    });

    await newUser.save();
    const token = jwt.sign({ username }, secreti, {
      expiresIn: "1h",
    });

    res.status(201).json({
      message: "User created successfully",
      token,
    });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
});

router.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const isUserPresent = await User.findOne({ username });
  if (!isUserPresent) {
    res.status(404).send("User not found, sign in");
  }

  if (isUserPresent.password === password) {
    const token = jwt.sign({ username }, secreti, { expiresIn: "1h" });
    res.status(200).json({
      message: "Logged in successfully",
      token: token,
    });
  }
  res.status(401).send("Wrong credentials");
});



export default router;
