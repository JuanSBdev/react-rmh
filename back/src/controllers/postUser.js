const { User } = require('../DB_connection')
 const postUser = async (req, res)=>{
try {
    const {email, password} = req.body
    if(email && password){
        const newUser = await User.create({
            email,
             password
        });
        res.status(200).json({ message:'nuevo usuario creado', user: newUser})
    }
    else{
        res.status(400).json({message: 'Faltan datos'})
    }
} catch (error) {
    res.status(404).json({error: error.message })
}
}
module.exports ={
    postUser
}