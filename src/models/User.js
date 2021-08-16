const { Schema, model } = require('mongoose')

const UsersSchema = new Schema({
  username: {
    type: String,
    unique: true,
  },
  passwordHash: String,
})

UsersSchema.set('toJSON', {
  transform: (_, returnedObject) => {
    returnedObject.id = returnedObject._id
    delete returnedObject._id
    delete returnedObject.__v

    // never return the passwordHash
    delete returnedObject.passwordHash
  },
})

const User = model('Users', UsersSchema)

module.exports = { User }
