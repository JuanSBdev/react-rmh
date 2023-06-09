const express =  require('express')
const router = express.Router();
const { getCharById } = require('../controllers/getCharById')
const { getCharDetail } = require('../controllers/getCharDetail')
const { login } = require('../controllers/login')
let { postFav, deleteFav} = require('../controllers/handleFavorites')


router.get('/onsearch/:id', getCharById)
router.get('/detail/:detailId', getCharDetail)
router.use('/login', login)
router.post('/fav', postFav)
router.delete('/fav/:id', deleteFav)





module.exports = router;