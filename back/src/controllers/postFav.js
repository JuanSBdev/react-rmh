const { Favorite } = require('../DB_connection')
 const postFav = async (req, res)=>{
    try {
        const { name, origin, status, image, species, gender} = req.body;
        // && origin && status && image && species && gender
        if(name){
            const newFav = await Favorite.create({
                name, 
                origin,
                status,
                image,
                species,
                gender
            })
            res.status(200).json(newFav)
        }
        else{
            res.status(401).json({mensaje: 'Faltan datos'})
        }
    } catch (error) {
        res.status(500).json({mensaje: error.message})
    }
};
module.exports ={
    postFav
}