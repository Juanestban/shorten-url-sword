const { Schema, model } = require('mongoose')

const ShortenUrlScheme = new Schema({
  urlCode: String,
  longUrl: String,
  shortUrl: String,
  date: {
    type: String,
    default: Date.now,
  },
})

ShortenUrlScheme.set('toJSON', {
  transform: (_, returnedObject) => {
    returnedObject.id = returnedObject._id
    delete returnedObject._id
    delete returnedObject.__v
  },
})

module.exports = model('ShortenUrl', ShortenUrlScheme)
