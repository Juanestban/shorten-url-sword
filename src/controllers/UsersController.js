const bcrypt = require('bcrypt')
const PrimaryController = require('./PrimaryController')
const { User } = require('../models/User')

class UsersController extends PrimaryController {
  constructor() {
    super(User)
  }

  create = async (req, res, next) => {
    try {
      const { body } = req
      const { username, email, password } = body
      const saltRounds = 10
      const passwordHash = await bcrypt.hash(password, saltRounds)
      const user = new User({
        username,
        email,
        passwordHash,
      })

      const savedUser = await user.save()
      return res.status(201).json(savedUser).end()
    } catch (e) {
      next(e)
    }
  }
}

const userController = new UsersController()

module.exports = { userController }
