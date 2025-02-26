const getJewelries = (req,res)=>{
    res.json({
       success: true,
       message: 'Jewelleries fetched successfully',
       data: JEWELLERY
    })
}

export {
    getJewelries
}