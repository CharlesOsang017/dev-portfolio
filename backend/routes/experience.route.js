import express from "express";
import { authMiddleware } from "../middleware/auth.middleware.js";
import { validateRequest } from "zod-express-middleware";
import { experienceSchema } from "../libs/validate-schema.js";
import { createExperience, allExperience } from "../controllers/experience.controller.js";

const router = express.Router();

router.post(
  "/",
  authMiddleware,
  validateRequest({ body: experienceSchema }),
  createExperience
);
router.get("/", allExperience);

export default router;
