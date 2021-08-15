const { Schema, model } = require('mongoose')

const UsersSchema = new Schema({
  username: String,
  email: String,
  password: String,
  audit: {
    createdAt: Date.now,
    updatedAt: Date,
    deletedAt: Date,
  },
})

UsersSchema.set('toJSON', {
  transform: (_, returnedObject) => {
    returnedObject.id = returnedObject._id
    delete returnedObject._id
    delete returnedObject.__v
  },
})

module.exports = model('UsersSchema', UsersSchema)
