let myFavorites = [];

const postFav = (req, res)=>{
   myFavorites.push(req.body)
   return res.status(200).json(myFavorites)

}
const deleteFav = (req, res)=>{
   let{ id } = req.params
   let filtrado = myFavorites.filter((este) => { return este.id !== Number(id)
   })
   myFavorites = filtrado;
   return res.status(200).json(myFavorites)
} 



module.exports = { postFav, deleteFav }