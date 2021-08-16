const { request } = require('express')
const jwt = require('jsonwebtoken')

const handleAuth = (req, res, next) => {
  const { headers } = req
  const { authorization } = headers
  const { JWT_PASSWORD } = process.env
  let token = ''
  let decodedToken = {}

  if (authorization && authorization.toLowerCase().startsWith('bearer')) {
    token = authorization.substring(7)
  }

  try {
    decodedToken = jwt.verify(token, JWT_PASSWORD)
  } catch {}

  if (!token || !decodedToken.id)
    return res
      .status(401)
      .json({ error: 401, message: 'token missing or invalid' })
      .end()

  request.decodedToken = decodedToken

  next()
}

module.exports = handleAuth
