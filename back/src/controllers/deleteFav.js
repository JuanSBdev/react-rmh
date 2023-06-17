const { Favorite } = require('../DB_connection')
 const deleteFav = async (req, res)=>{
    try {
        const { id } = req.params;
        if(id){
            const deleteThis = await Favorite.destroy({
                where:{
                    id
                }
            });
                const favoritos = await Favorite.findAll()
                res.status(200).json(favoritos)        }
        else{
            res.status(401).json({mensaje: 'Faltan datos'})
        }
    } catch (error) {
        res.status(500).json({mensaje: error.message})
    }
};
module.exports ={
   deleteFav
}