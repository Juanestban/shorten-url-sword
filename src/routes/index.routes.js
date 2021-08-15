const { Router } = require('express')
const router = Router()

router.get('/', (_, res) => {
  res
    .status(200)
    .json({
      message: 'Hello world, this is the api for handle the shorten urls',
    })
    .end()
})

module.exports = router
