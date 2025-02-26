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

export {
    postJewelries,
}