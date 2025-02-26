import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { getNotFound, health } from './controllers/other.js';
import { deleteJewelries, getJewelries, getJewelriesById, postJewelries, putJewelries } from './controllers/jewelries.js';
dotenv.config();

const app = express();
app.use(express.json())
app.use(cors());





app.get('/health', health)
//fetch data
app.get('/jewelries', getJewelries)

//ADD jewelrie
app.post('/jewelries',postJewelries)

//DELETE jewellery
app.delete('/jewelries/:id',deleteJewelries)

//update using put method (complete update)
app.put('/jewelries/:id',putJewelries)
 
// reading specific jwellery
app.get('/jewelries/:id',getJewelriesById)
app.get('*', getNotFound)

 const PORT = process.env.PORT;
app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
})