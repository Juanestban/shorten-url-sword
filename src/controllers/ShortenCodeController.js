const { ShortenUrl } = require('../models/ShortenUrl')

class ShortenCodeController {
  findAll = async (req, res, next) => {
    try {
      const { params } = req
      const { code } = params
      const shortUrl = await ShortenUrl.findOne({ urlCode: code })

      if (shortUrl) return res.redirect(shortUrl.longUrl)
      return res
        .status(404)
        .json({ error: 404, message: "this url hasn't exist" })
        .end()
    } catch (e) {
      next(e)
    }
  }
}

const shortenCodeController = new ShortenCodeController()

module.exports = { shortenCodeController }
