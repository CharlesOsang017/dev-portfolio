export const createAdminUser = async(req, res)=>{
    try {
        const {name, email, password} = req.body;

        

    } catch (error) {
        console.log('error creating admin user', error.message)
        return res.status(500).json({message: error.message})
    }
}