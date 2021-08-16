const { Router } = require('express')
const { userController } = require('../controllers/UsersController')

const router = Router()

// get alls users
router.get('/users', userController.findAll)

// get one user by id
router.get('/users/:id', userController.findById)

// create a new user
router.post('/users', userController.create)

// update some user
router.put('/users/:id', userController.update)

// delete some user
router.delete('/users/:id', userController.delete)

const userRouter = router

module.exports = { userRouter }
