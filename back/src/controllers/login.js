const { User } = require('../DB_connection');
let login = async (req, res)=> {
  try {
    let{ email, password } = req.query;
    if(!email || !password){
      res.status(400).json({mensaje: 'Faltan datos'})
    }
    else{
      const user = await User.findOne({
                                where:{
                                  email,
                                }
      })
      if(!user){
        res.status(404).json({mensaje: 'Usuario no encontrado'})
      }
      if(user){
       if(user.password === password){
        res.status(200).json( {user,
                              access: true
                            });
       }
       else{
        res.status(400).json({mensaje:'Contraseña incorrecta'})
       }
      }
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
      
};
module.exports = { login }