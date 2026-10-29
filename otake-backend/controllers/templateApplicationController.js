import TemplateApplication from "../models/TemplateApplication.js";

export const submitTemplateApplication = async (req, res) => {
  const { fullName, email, phone, companyName, website, role, message } = req.body;

  if (!fullName || !email || !phone || !message) {
    res.status(400);
    throw new Error("Please fill all required fields");
  }

  const application = await TemplateApplication.create({
    fullName,
    email,
    phone,
    companyName,
    website,
    role,
    message,
  });

  res.status(201).json({
    success: true,
    message: "Application submitted successfully",
    application,
  });
};

export const getTemplateApplications = async (req, res) => {
  const applications = await TemplateApplication.find({}).sort({ createdAt: -1 });
  res.json(applications);
};
