const { Router } = require('express')
const router = Router()
const { userRouter } = require('./users.routes')

router.get('/', (_, res) => {
  res
    .status(200)
    .json({
      message: 'Hello world, this is the api for handle the shorten urls',
    })
    .end()
})

router.use(userRouter)

module.exports = router
