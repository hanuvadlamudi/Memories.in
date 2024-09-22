import express from 'express'
const app = express();
import "dotenv/config"
const PORT = process.env.PORT || 8080
import { connectDB } from './Models/db.js';

connectDB()

app.listen(PORT,()=>{
    console.log(`app is listening at ${PORT}`)
})

app.get('/',(req,res)=>{
    res.send("memories.in is running")
})


