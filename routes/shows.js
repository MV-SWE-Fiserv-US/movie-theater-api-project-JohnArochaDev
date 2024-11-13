const express = require('express')
const showRouter = express.Router()
const Show = require('../models/Show')

showRouter.use(express.json())
showRouter.use(express.urlencoded({ extended: true }))

showRouter.get('/', async (req, res) => {
    const allShows = await Show.findAll()
    res.json(allShows)
})

module.exports = showRouter