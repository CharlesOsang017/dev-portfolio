import express from "express";
import { validateRequest } from "zod-express-middleware";
import { registerAdminSchema } from "../libs/validate-schema.js";
import { createAdminUser } from "../controllers/user.controller.js";

const router = express.Router();

router.post(
  "/register",
  validateRequest({ body: registerAdminSchema }),
  createAdminUser
);

export default router;
