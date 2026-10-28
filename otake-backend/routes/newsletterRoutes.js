import express from "express";
import { subscribeNewsletter, getSubscribers } from "../controllers/newsletterController.js";
import { protect } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/subscribe", subscribeNewsletter);
router.get("/", protect, getSubscribers);

export default router;
