import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import { connectToDB } from './config.js';


dotenv.config()


const app = express();


app.use(cors())
app.use(express.json())

const port = process.env.PORT || 8000

app.listen(port, ()=>{
    console.log(`Listening to port ${port}`)
    connectToDB()
})
