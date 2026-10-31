import User from "../models/User.js";
import generateToken from "../utils/generateToken.js";

export const registerUser = async (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  if (!firstName || !email || !password) {
    return res.status(400).json({ message: "Please fill in all required fields" });
  }

  const cleanEmail = email.trim().toLowerCase();
  const escaped = cleanEmail.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");

  const userExists = await User.findOne({
    $or: [
      { email: cleanEmail },
      { email: { $regex: new RegExp(`^${escaped}$`, "i") } },
    ],
  });

  if (userExists) {
    return res.status(400).json({ message: "An account with this email already exists" });
  }

  const isAdminEmail =
    cleanEmail === "admin@otake.com" ||
    cleanEmail.startsWith("admin@");

  const user = await User.create({
    firstName: firstName.trim(),
    lastName: (lastName || "").trim(),
    email: cleanEmail,
    password,
    role: isAdminEmail ? "admin" : "user",
  });

  if (user) {
    return res.status(201).json({
      _id: user._id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      role: user.role,
      isAdmin: user.role === "admin",
      token: generateToken(user._id),
    });
  } else {
    return res.status(400).json({ message: "Invalid user data" });
  }
};

export const loginUser = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "Please enter your email and password" });
  }

  const cleanEmail = email.trim().toLowerCase();
  const escaped = cleanEmail.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");

  let user = await User.findOne({ email: cleanEmail });
  if (!user) {
    user = await User.findOne({ email: { $regex: new RegExp(`^${escaped}$`, "i") } });
  }

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

    return res.json({
      _id: user._id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      role: effectiveRole,
      isAdmin: effectiveRole === "admin",
      token: generateToken(user._id),
    });
  } else {
    return res.status(401).json({ message: "Invalid email or password" });
  }
};

export const getUsers = async (req, res) => {
  const users = await User.find({}).select("-password").sort({ createdAt: -1 });
  res.json(users);
};
