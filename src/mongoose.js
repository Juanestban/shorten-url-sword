const mongoose = require('mongoose')

const { USER_MONGO, PASS_MONGO, NODE_ENV } = process.env

const nameDatabase =
  NODE_ENV === 'development' ? 'shortenUrls-dev' : 'shortenUrls'

const DB_URI = `mongodb+srv://${USER_MONGO}:${PASS_MONGO}@cluster-shorten-url.5laqq.mongodb.net/${nameDatabase}?retryWrites=true&w=majority`

mongoose
  .connect(DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  })
  .then(() => console.log('mongoDB is connected'))
  .catch((err) =>
    console.error("hasn't can connect to mongodb", { tracer: err })
  )

module.exports = mongoose
