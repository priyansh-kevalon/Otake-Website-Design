import express from "express";
import { submitTemplateApplication, getTemplateApplications } from "../controllers/templateApplicationController.js";
import { protect } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/", submitTemplateApplication);
router.get("/", protect, getTemplateApplications);

export default router;
