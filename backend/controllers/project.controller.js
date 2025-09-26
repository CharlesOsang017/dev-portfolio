import Project from "../models/project.model.js";

export const createNewProject = async(req, res)=>{
    try {
        const { title, description, image, link } = req.body;
        const newProject = await Project.create({
            title,
            description,
            image,
            link
        });
        await newProject.save();
        return res.status(201).json({ message: "Project created successfully" });
    } catch (error) {
        console.log("error creating new project", error.message);
        return res.status(500).json({ message: error.message });
    }
}

export const getProjects = async(req, res)=>{
    try {
        const projects = await Project.find({});
        return res.status(200).json(projects);
    } catch (error) {
        console.log("error getting projects", error.message);
        return res.status(500).json({ message: error.message });
    }
}