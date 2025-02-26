import { JEWELLERY } from "../controllers/data.js";
const getJewelries = (req,res)=>{
    res.json({
       success: true,
       message: 'Jewelleries fetched successfully',
       data: JEWELLERY
    })
}

const deleteJewelriesById = (req, res)=>{
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
}


const getJewelriesById = (req, res)=>{
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

}

const postJewelries = (req,res)=>{
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
    
}

const putJewelries = (req, res)=>{
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

}



export {
    getJewelries,
    putJewelries,
    postJewelries,
    deleteJewelriesById,
    getJewelriesById
    
}