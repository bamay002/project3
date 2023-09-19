const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const User = require('./models/User')
const app = express()


app.use(cors())
app.use(express.json())

mongoose.connect('mongodb+srv://beebz:<password>@cluster0.vaswuxp.mongodb.net/?retryWrites=true&w=majority')

app.post('/signup', async (req,res) => {
    const {username,password} = req.body
    const userDoc = await User.create({username,password})
    res.json(userDoc)
})
// beebz chisme-blog

app.listen(2222)