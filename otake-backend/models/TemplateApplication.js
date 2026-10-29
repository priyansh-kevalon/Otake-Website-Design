import mongoose from "mongoose";

const templateApplicationSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    companyName: {
      type: String,
    },
    website: {
      type: String,
    },
    role: {
      type: String,
    },
    message: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const TemplateApplication = mongoose.model(
  "TemplateApplication",
  templateApplicationSchema
);

export default TemplateApplication;
