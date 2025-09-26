import express from "express";
import { authMiddleware } from "../middleware/auth.middleware.js";
import { createNewSkill, allSkills } from "../controllers/skill.controller.js";
import { validateRequest } from "zod-express-middleware/lib/index.js";
import { skillsSchema } from "../libs/validate-schema.js";

const router = express.Router();

router.post(
  "/",
  authMiddleware,
  validateRequest({ body: skillsSchema }),
  createNewSkill
);
router.get("/", allSkills);

export default router;
