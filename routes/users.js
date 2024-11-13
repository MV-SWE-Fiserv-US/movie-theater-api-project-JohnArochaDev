const express = require('express')
const userRouter = express.Router()
const User = require('../models/User')
const Show = require('../models/Show')

userRouter.use(express.json())
userRouter.use(express.urlencoded({ extended: true }))

userRouter.get('/:id/shows', async (req, res) => {
    const id = req.params.id
    const user = await User.findByPk(id, {
        include: {
            model: Show
            // through: { attributes: [] }
        }
    })
    if (user) {
        res.json(user.Shows)
    } else {
        res.status(404).send('User not found')
    }
})

userRouter.put('/:userId/shows/:showId', async (req, res) => {
    const { userId, showId } = req.params
    const user = await User.findByPk(userId)
    const show = await Show.findByPk(showId)
    if (user && show) {
        await user.addShow(show)
        res.status(200).send('Show associated with user successfully')
    } else {
        res.status(404).send('User or Show not found')
    }
})

userRouter.get('/:id', async (req, res) => {
    const id = req.params.id
    const user = await User.findByPk(id)
    res.json(user)
})

userRouter.get('/', async (req, res) => {
    const allUsers = await User.findAll()
    res.json(allUsers)
})

module.exports = userRouter