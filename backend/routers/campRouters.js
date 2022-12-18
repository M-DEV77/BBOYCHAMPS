const router = require('express').Router();
const campController = require('../controllers/CampController')

router.post('/criar',campController.criar)

module.exports = router


