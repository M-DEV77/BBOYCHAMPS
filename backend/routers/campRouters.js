const router = require('express').Router();
const campController = require('../controllers/CampController')

router.post('/criar',campController.criar)
router.get('/',campController.campeonato)

module.exports = router


