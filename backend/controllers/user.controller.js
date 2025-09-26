import User from "../models/user.model.js";
import bcrypt from "bcrypt";

export const createAdminUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    // check for existing user
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    // create a new user
    const newUser = await User.create({
      name,
      email,
      password: hashedPassword,
    });
    return res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    console.log("error creating admin user", error.message);
    return res.status(500).json({ message: error.message });
  }
};
