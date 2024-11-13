const express = require('express')
const showRouter = express.Router()
const Show = require('../models/Show')
const User = require('../models/User')

showRouter.use(express.json())
showRouter.use(express.urlencoded({ extended: true }))

showRouter.delete('/:id', async (req, res) => {
    const id = req.params.id
    await Show.destroy({ where: { id } })
    res.send('Show deleted')
})

showRouter.put('/:id/:property', async (req, res) => {
    const id = req.params.id
    const property = req.params.property
    const updatedProperty = await Show.update({})// update the property via boolean, if its true make it false if false make it true
})

showRouter.put('/:id/:property', async (req, res) => {
    const id = req.params.id
    const property = req.params.property

    const show = await Show.findByPk(id)
    if (show && typeof show[property] === 'boolean') {
        show[property] = !show[property]
        await show.save()
        res.status(200).json(show)
    } else {
        res.status(404).send('Show not found or property is not boolean')
    }
})

showRouter.get('/:id', async (req, res) => {
    const id = req.params.id
    const show = await Show.findByPk(id)
    res.json(show)
})

showRouter.get('/', async (req, res) => {
    const allShows = await Show.findAll()
    res.json(allShows)
})

module.exports = showRouter