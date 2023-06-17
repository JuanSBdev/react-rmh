const express =  require('express')
const router = express.Router();
const {login} = require('../controllers/login');
const {postUser} = require('../controllers/postUser');
const {deleteFav} = require('../controllers/deleteFav');
const{ postFav, getFav} = require('../controllers/postFav');// const { getCharById } = require('../controllers/getCharById')
const { getCharDetail } = require('../controllers/getCharDetail')
const { getCharById } = require('../controllers/getCharById');

// const { login } = require('../controllers/login')
// let { postFav, deleteFav} = require('../controllers/handleFavorites')


router.get('/login', login)
router.post('/login', postUser )
router.post('/fav', postFav)
router.get('/fav', getFav)
router.delete('/fav/:id', deleteFav)
router.get('/onsearch/:id', getCharById)
router.get('/detail/:detailId', getCharDetail)





module.exports = router;