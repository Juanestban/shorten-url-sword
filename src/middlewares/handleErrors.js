const handlerErrors = (error, req, res, next) => {
  console.log(error.name)
  console.error(error.message)
  if (error.name === 'CastError') {
    return res
      .status(400)
      .json({ message: 'id used is malformed', stackTrace: error.message })
      .end()
  }
  return res.status(500).end()
}

module.exports = handlerErrors
