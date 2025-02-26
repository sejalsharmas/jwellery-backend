const health =(req,res)=>{
    res.json({
        success: true,
        message: 'Server is Running'
    })
}


const getNotFound =(req,res)=>{
    res.status (404).json({
        success: false,
        message: 'Invalid API'
    })

}
export {
    health   ,
    getNotFound 
}