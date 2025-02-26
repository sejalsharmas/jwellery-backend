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
    putJewelries
}