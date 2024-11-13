const express = require('express')
const userRouter = express.Router()
const User = require('../models/User')

userRouter.use(express.json())
userRouter.use(express.urlencoded({ extended: true }))

userRouter.get('/', async (req, res) => {
    const allUsers = await User.findAll()
    res.json(allUsers)
})

module.exports = userRouter