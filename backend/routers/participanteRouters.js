const router = require('express').Router();
const campController = require('../controllers/CampController')

//router.post('/criar',campController.criar)
router.get('/pegar',campController.participantes)


module.exports = router


