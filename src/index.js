const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const dotenv = require('dotenv')

// Initializer
const app = express()

// Settings
dotenv.config()
app.set('port', process.env.PORT || 3200)

// database-connection
require('./mongoose')

// Middlewares
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())
app.use(morgan('dev'))

// Routes

// Starting server
app.listen(app.get('port'), () => {
  console.log('shorten-url | [+] listen on port:', app.get('port'))
})
