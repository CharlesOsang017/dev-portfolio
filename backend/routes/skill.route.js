import express from 'express'
import { authMiddleware } from '../middleware/auth.middleware.js'
import { createNewSkill } from '../controllers/skill.controller.js'

const router = express.Router()

router.post("/", authMiddleware, createNewSkill)


export default router