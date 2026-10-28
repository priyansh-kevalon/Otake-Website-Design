import Newsletter from "../models/Newsletter.js";

export const subscribeNewsletter = async (req, res) => {
  const { email } = req.body;

  if (!email) {
    res.status(400);
    throw new Error("Email is required");
  }

  const exists = await Newsletter.findOne({ email });

  if (exists) {
    res.status(400);
    throw new Error("Email already subscribed");
  }

  const subscriber = await Newsletter.create({ email });

  res.status(201).json({
    success: true,
    message: "Subscribed successfully",
    subscriber,
  });
};
