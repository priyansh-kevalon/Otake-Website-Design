import Contact from "../models/Contact.js";

export const submitContact = async (req, res) => {
  const { firstName, lastName, email, phone, service, message } = req.body;

  if (!firstName || !lastName || !email || !message) {
    res.status(400);
    throw new Error("Please fill all required fields");
  }

  const contact = await Contact.create({
    firstName,
    lastName,
    email,
    phone,
    service,
    message,
  });

  res.status(201).json({
    success: true,
    message: "Message sent successfully",
    contact,
  });
};
