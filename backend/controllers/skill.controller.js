import Skill from "../models/skill.model.js";

export const createNewSkill = async(req, res)=>{
    try {
        const {title, percentage, category} = req.body
        const newSkill = await Skill.create({
            title,
            percentage,
            category
        })
        return res.status(201).json({message: "Skill created successfully"})
    } catch (error) {
        console.log("error creating new skill", error.message)
        return res.status(500).json({message: error.message})
    }
}