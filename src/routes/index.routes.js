const { Router } = require('express')
const router = Router()
const { userRouter } = require('./users.routes')
const { shortenUrlRouter } = require('./shortenUrl.routes')
const handleAuth = require('../middlewares/handleAuth')

router.use(handleAuth)

router.get('/', (_, res) => {
  res
    .status(200)
    .json({
      message: 'Hello world, this is the api for handle the shorten urls',
    })
    .end()
})

router.use(userRouter)
router.use(shortenUrlRouter)

module.exports = router
