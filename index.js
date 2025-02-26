import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();

import { getNotFound } from './controllers/others.js';
import { getJewelries ,
    putJewelries,
    postJewelries,
    deleteJewelriesById,
    getJewelriesById
 } from './controllers/jewelries.js';
import { getHealth } from './controllers/Health.js';


const app = express();
app.use(express.json())
app.use(cors());







app.get('/health', getHealth )
//fetch data
app.get('/jewelries',getJewelries)
//ADD jewelrie
app.post('/jewelries', postJewelries)
//DELETE jewellery
app.delete('/jewelries/:id', deleteJewelriesById)
//update using put method (complete update)
app.put('/jewelries/:id', putJewelries)
// reading specific jwellery
app.get('/jewelries/:id', getJewelriesById)
app.get('*', getNotFound)

 const PORT = process.env.PORT;
app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
})