const mongoose = require('mongoose')

const { USER_MONGO, PASS_MONGO } = process.env

const DB_URI = `mongodb+srv://${USER_MONGO}:${PASS_MONGO}@cluster-shorten-url.5laqq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`

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
