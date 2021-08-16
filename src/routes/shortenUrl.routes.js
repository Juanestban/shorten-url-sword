const { Router } = require('express')
const { shortenUrlController } = require('../controllers/ShortenUrlController')

const router = Router()

// get alls shorts urls createds
router.get('/shortenUrls', shortenUrlController.findAll)

// get one shorten url by id
router.get('/shortenUrls/:id', shortenUrlController.findById)

// create a new shorten url
router.post('/shortenUrls', shortenUrlController.create)

// update some shorten url
router.put('/shortenUrls/:id', shortenUrlController.update)

// delete some shorten url
router.delete('/shortenUrls/:id', shortenUrlController.delete)

const shortenUrlRouter = router

module.exports = { shortenUrlRouter }
