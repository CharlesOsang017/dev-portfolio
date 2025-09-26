import express from "express";
import { validateRequest } from "zod-express-middleware";
import { registerAdminSchema } from "../libs/validate-schema.js";

const router = express.Router();

router.post(
  "/register",
  validateRequest({ body: registerAdminSchema }),
  createAdminUser
);

export default router;
