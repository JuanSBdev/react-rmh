let datos = require('../utils/users');

let login = function (req, res) {
  let{ email, password } = req.query;
    let access = false;
    datos.forEach((dato) =>{
        if(dato.email === email && dato.password === password){
         access = true;
        }
       return res.status(200).json({access})
    })
};
module.exports = { login }