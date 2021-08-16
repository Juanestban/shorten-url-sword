const validUrl = require('valid-url')
const shortid = require('shortid')
const PrimaryController = require('./PrimaryController')
const { ShortenUrl } = require('../models/ShortenUrl')
const { baseUrl } = require('../config/baseUrl')

class ShortenUrlController extends PrimaryController {
  constructor() {
    super(ShortenUrl)
  }

  create = async (req, res, next) => {
    const { body, headers } = req
    const { longUrl } = body
    const { authorization } = headers

    // missing implement jwt

    if (!validUrl.isUri(longUrl))
      return res
        .status(404)
        .json({ message: 'Invalid base URL', longUrl })
        .end()

    const urlCode = shortid.generate()
    try {
      const findUrlAlreadyExist = await ShortenUrl.findOne({ longUrl })

      // this url already exist
      if (findUrlAlreadyExist)
        return res
          .status(300)
          .json({
            message: 'this option is already exist',
            ...findUrlAlreadyExist,
          })
          .end()

      const shortUrl = `${baseUrl}/short/${urlCode}`
      const shortenUrl = new ShortenUrl({
        longUrl,
        shortUrl,
        urlCode,
        userId: authorization ?? '',
        date: new Date(),
      })
      const savedShortenUrl = await shortenUrl.save()

      res.status(201).json(savedShortenUrl).end()
    } catch (e) {
      next(e)
    }
  }
}

const shortenUrlController = new ShortenUrlController()

module.exports = { shortenUrlController }
