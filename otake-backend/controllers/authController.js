import User from "../models/User.js";
import generateToken from "../utils/generateToken.js";

export const registerUser = async (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error("User already exists");
  }

  const isAdminEmail =
    email.toLowerCase() === "admin@otake.com" ||
    email.toLowerCase().startsWith("admin@");

  const user = await User.create({
    firstName,
    lastName,
    email,
    password,
    role: isAdminEmail ? "admin" : "user",
  });

  if (user) {
    res.status(201).json({
      _id: user._id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      role: user.role,
      isAdmin: user.role === "admin",
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
};

export const loginUser = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    const isMasterAdmin =
      user.email.toLowerCase() === "admin@otake.com" ||
      user.email.toLowerCase().startsWith("admin@") ||
      user.role === "admin";

    if (isMasterAdmin && user.role !== "admin") {
      user.role = "admin";
      await user.save();
    }

    const effectiveRole = isMasterAdmin ? "admin" : (user.role || "user");

    res.json({
      _id: user._id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      role: effectiveRole,
      isAdmin: effectiveRole === "admin",
      token: generateToken(user._id),
    });
  } else {
    res.status(401);
    throw new Error("Invalid email or password");
  }
};

export const getUsers = async (req, res) => {
  const users = await User.find({}).select("-password").sort({ createdAt: -1 });
  res.json(users);
};
