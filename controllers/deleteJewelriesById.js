const deleteJewelries = (req, res)=>{
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

export {
    deleteJewelries
 
}