// src/index.ts
import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './db/connect.js';

dotenv.config();

const app = express();
app.use(express.json());

app.get("/" , (req,res)=>{
  res.json({message:"Hello Buddy!!"});
})


const PORT = process.env.PORT || 3000 ; 

connectDB().then(() => {
  app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
});
