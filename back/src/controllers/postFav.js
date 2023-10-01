const { Favorite, User } = require('../DB_connection')
 const postFav = async (req, res)=>{
    try {
        const { userId, name,  status, image, species, id} = req.body;
        //   &&  status && image && species
        if( name ){

            const favorite ={
                id,
                name, 
                // origin,
                status,
                image,
                species,
                // gender

            }
            const [newFavorite, created] = await Favorite.findOrCreate({
            where:{
                name: name
            }, defaults: favorite,
            })

            if(!created){
                throw new Error('already in your list')
            }

            let userFound = await User.findOne({
                id:{
                    userId
                }
            })
            await newFavorite.addUsers(userFound)
            res.status(200).json(newFavorite)
        }
        else{
            res.status(401).json({mensaje: 'Faltan datos'})
        }
    } catch (error) {
        res.status(501).json({mensaje: error.message})
    }
};


const getFav = async (req, res) => {
    try {
        let {userId }= req.body;
        const user = await User.findByPk(userId)
        if(!user){
            res.status(404).json({message:'user not found'});
        }

      const favorites = await user.getFavorites();
      res.status(200).json(favorites);
    } catch (error) {
      res.status(500).json({ message: 'Error al obtener los favoritos', error });
    }
  };
module.exports ={
    postFav,
    getFav
}