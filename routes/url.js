const express = require('express')
const router = express.Router();
const {generateShortURl,redirectURL,analytics,findAll} = require('../controller/url')

router.route('/')
// .get(findAll)
.post(generateShortURl)
router.route('/:url')
.get(redirectURL)

router.route('/analytics/:url')
.get(analytics)


module.exports = router