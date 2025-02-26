import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();
import { getHealth, getNotFound } from "./controllers/Health.js";
import { getJewelries } from './controllers/jewelries.js';
import { postJewelries } from './controllers/postJewelries.js';
import { deleteJewelries } from './controllers/deleteJewelriesById.js';
import { putJewelries } from './controllers/putJewelries.js';
import { getJewelriesById } from './controllers/jewelriesById.js';

const app = express();
app.use(express.json())
app.use(cors());



const JEWELLERY =[
    {
        id:1,
        name:"Tear Drop earing",
        type:"Tear Drop",
        Metalused:"Pure Gold",
        Weight:"22K",
        Color:"Rose Gold",
        Price:"24,000/-",
        Status:"Latest",
        image:"https://cdn.caratlane.com/media/catalog/product/U/E/UE04416-YG00P0_1_lar.jpg"
    },
    {
        id:2,
        name:"Tear Drop earing",
        type:"Tear Drop",
        Metalused:"Pure Gold",
        Weight:"18K",
        Color:"Gold",
        Price:"15,000/-",
        Status:"Latest",
        image:"https://cdn.caratlane.com/media/catalog/product/U/E/UE00004-YG0000_1_lar.jpg"
    },
    {
        id:3,
        name:"Tear Drop earing",
        type:"Tear Drop",
        Metalused:"Rose Gold",
        Weight:"12k",
        Color:"Rose Gold",
        Price:"10,000/-",
        Status:"Latest",
        image:"https://cdn.caratlane.com/media/catalog/product/J/E/JE09389-1RP900_1_lar.jpg"
    },
    {
        id:4,
        name:"Studs",
        type:"Studs Rose Gold",
        Metalused:"Pure Gold",
        Weight:"10k",
        Color:"Rose Gold",
        Price:"12,000/-",
        Status:"Latest",
        image:"https://cdn.caratlane.com/media/catalog/product/J/E/JE08295-1RP900_1_lar.jpg"
    },
    {
        id:5,
        name:"Studs",
        type:"Studs Gold",
        Metalused:"Pure Gold",
        Weight:"22K",
        Color:"Yellow Gold",
        Price:"24,800/-",
        Status:"Latest",
        image:"https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/J/E/JE08121-1YP600_11_listfront.jpg"
    },
    {
        id:6,
        name:"Studs",
        type:"Studs Gold",
        Metalused:"Pure Gold",
        Weight:"18K",
        Color:"Yellow Gold",
        Price:"13,800/-",
        Status:"Latest",
        image:"https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/J/E/JE06845-1RP600_11_listfront.jpg"
    },
    {
        id:7,
        name:"Earcuffs",
        type:"Diamond Earcufs",
        Metalused:"Pure Gold",
        Weight:"22K",
        Color:"Yellow Gold",
        Price:"25,000/-",
        Status:"Latest",
        image:"https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/J/E/JE07363-1RP900_11_listfront.jpg"
    },
    {
        id:8,
        name:"Earcuffs",
        type:" Pink Diamond Ear Cuffs",
        Metalused:"Pure Gold",
        Weight:"22K",
        Color:"Yellow Gold",
        Price:"23,000/-",
        Status:"Latest",
        image:"https://cdn.caratlane.com/media/catalog/product/J/E/JE07505-1YP900_1_lar.jpg"
    },
    {
        id:9,
        name:"Earcuffs",
        type:"Pearl Earcuffs",
        Metalused:"Pure Gold",
        Weight:"10K",
        Color:"Rose Gold",
        Price:"11,000/-",
        Status:"Latest",
        image:"https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/J/E/JE06933-1YP600_11_listfront.jpg"
    },
    {
        id:10,
        name:"Pearl Earing",
        type:"Gold Pearl Earing",
        Metalused:"Pure Gold",
        Weight:"22K",
        Color:"Yellow Gold",
        Price:"26,000/-",
        Status:"Latest",
        image:"https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/U/E/UE00445-YG00PL_11_listfront.jpg"
    }
]


app.get('/health', getHealth)


//fetch data
app.get('/jewelries',getJewelries)

//ADD jewelrie
app.post('/jewelries', postJewelries)

//DELETE jewellery
app.delete('/jewelries/:id', deleteJewelries)

//update using put method (complete update)
app.put('/jewelries/:id', putJewelries)
 
// reading specific jwellery
app.get('/jewelries/:id', getJewelriesById)


app.get('*', getNotFound)

 const PORT = process.env.PORT;
app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
})