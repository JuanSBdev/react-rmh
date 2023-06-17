const { Favorite } = require('../DB_connection')
 const postFav = async (req, res)=>{
    try {
        const { name,  status, image, species, id} = req.body;
        //   &&  status && image && species
        if( name ){
            const newFav = await Favorite.create({
                id,
                name, 
                // origin,
                status,
                image,
                species,
                // gender
            })
            res.status(200).json(newFav)
        }
        else{
            res.status(401).json({mensaje: 'Faltan datos'})
        }
    } catch (error) {
        res.status(501).json({mensaje: error.message})
    }
};
module.exports ={
    postFav
}