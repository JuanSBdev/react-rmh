const {  User } = require('../DB_connection')
const getUser = async(req, res)=>{
    try {
        let {email} = req.body
        let userFound = await  User.findOne({
            where:{
                email: email
            }
        })

    } catch (error) {
        res.status(501).json({mensaje: error.message})
    }
}