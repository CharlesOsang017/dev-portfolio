import express from "express";
import { authMiddleware } from "../middleware/auth.middleware.js";
import { validateRequest } from "zod-express-middleware";
import { createNewProject, getProjects } from "../controllers/project.controller.js";
import { projectSchema } from "../libs/validate-schema.js";

const router = express.Router();

router.post(
  "/",
  authMiddleware,
  validateRequest({ body: projectSchema }),
  createNewProject
);

router.get("/", getProjects)

export default router;
