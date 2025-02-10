import express from 'express';
import cors from 'cors'

const app = express();
app.use(express.json())
app.use(cors());

const PORT = 5001;

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

app.get('/health',(req,res)=>{
    res.json({
        success: true,
        message: 'Server is Running'
    })
})
//fetch data
app.get('/jewelries',(req,res)=>{
     res.json({
        success: true,
        message: 'Jewelleries fetched successfully',
        data: JEWELLERY
     })
})

//ADD jewelrie
app.post('/jewelries',(req,res)=>{
    const {id , name, type, Metalused ,Weight, Color, Price, Status , image} = req.body;

    const jewelery = {
        id ,
        name, 
        type,
        Metalused ,
        Weight, 
        Color,
        Price,
        Status , 
        image
    };
    if(!id){
        return res.status(400).json({
            success: false,
            message: 'Id is required'
        })
    }
    
    JEWELLERY.push(jewelery);

    res.status(201).json({
        success: true,
        message: 'Jewelery added successfully',
        data: jewelery
    })
    
})

//DELETE jewellery
app.delete('/jewelries/:id',(req, res)=>{
    const {id} = req.params;
    let jewelrieIndex = -1

    JEWELLERY.map((jewelrie, index) => {
        if (jewelrie.id == id) {
            jewelrieIndex = index;
        }
    });


    if (jewelrieIndex == -1) {
        return res.status(404).json({
            success: "false",
            message: "Jewelrie not found"
        });
    }

    JEWELLERY.splice(jewelrieIndex, 1);
    res.json({
        success: "true",
        message: "Jewelrie deleted successfully"
    });



   


})

//update using put method (complete update)
app.put('/jewelries/:id',(req, res)=>{
    const {id} = req.params;
    const { name, type, Metalused ,Weight, Color, Price, Status , image} = req.body;
    let jewelrieIndex = -1

    JEWELLERY.map((jewelrie, index) => {
        if (jewelrie.id == id) {
            jewelrieIndex = index;
        }
    });

    
    if (jewelrieIndex == -1) {
        return res.status(404).json({
            success: "false",
            message: "Jewelrie not found"
        });
    }

    const jewelrie = {
        id,
        name, 
        type, 
        Metalused ,
        Weight, 
        Color, 
        Price, 
        Status , 
        image
    }

    JEWELLERY[jewelrieIndex] = jewelrie;
    res.json({
        success: "true",
        message: "Jewelrie updated successfully",
        data: jewelrie
    })

})
 
// reading specific jwellery
app.get('/jewelries/:id',(req, res)=>{
    const {id} = req.params;
    let jewelrieIndex = -1

    JEWELLERY.map((jewelrie, index) => {
        if (jewelrie.id == id) {
            jewelrieIndex = index;
        }
    });

    
    if (jewelrieIndex == -1) {
        return res.status(404).json({
            success: "false",
            message: "Jewelrie not found"
        });
    }

    const jewelrie = JEWELLERY[jewelrieIndex]

    
    res.json({
        success: "true",
        message: "Jewelrie details fetched successfully",
        data: jewelrie
    })

})
app.get('*',(req,res)=>{
    res.json({
        success: false,
        message: 'Invalid API'
    })

})

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})