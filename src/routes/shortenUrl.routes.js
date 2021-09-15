const { Router } = require('express')
const { shortenUrlController } = require('../controllers/ShortenUrlController')

const router = Router()

// get alls shorts urls createds
router.get('/', shortenUrlController.findAll)

// get one shorten url by id
router.get('/:id', shortenUrlController.findById)

// create a new shorten url
router.post('/', shortenUrlController.create)

// update some shorten url
router.put('/:id', shortenUrlController.update)

// delete some shorten url
router.delete('/:id', shortenUrlController.delete)

const shortenUrlRouter = router

module.exports = { shortenUrlRouter }
