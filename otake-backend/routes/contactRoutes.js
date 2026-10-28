import express from "express";
import { submitContact, getContacts } from "../controllers/contactController.js";
import { protect } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/", submitContact);
router.get("/", protect, getContacts);

export default router;
