import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import { connectToDB } from './config.js';
import skillRoute from './routes/skill.route.js'
import userRoute from './routes/user.route.js'


dotenv.config()


const app = express();

// middleware
app.use(cors())
app.use(express.json())

// routes
app.use("/api/v1/user", userRoute)
app.use('/api/v1/skill', skillRoute)

const port = process.env.PORT || 8000

app.listen(port, ()=>{
    console.log(`Listening to port ${port}`)
    connectToDB()
})
