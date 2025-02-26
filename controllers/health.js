const getHealth = (req, res) => {
    res.json({
        success: true,
        message: 'Server is Running'
    })
};

export{
    getHealth    
}