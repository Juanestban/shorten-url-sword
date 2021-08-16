const { Router } = require('express')
const router = Router()
const {
  shortenCodeController,
} = require('../controllers/ShortenCodeController')

router.get('/:code', shortenCodeController.findAll)

module.exports = router
