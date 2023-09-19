const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')

app.use(cors())
app.use(express.json())

mongoose.connect('mongodb+srv://beebz:<password>@cluster0.vaswuxp.mongodb.net/?retryWrites=true&w=majority')

app.post('/signup', (req,res) => {
    const {username,password} = req.body
    res.json({requestData:{username,password}})
})
// beebz chisme-blog

app.listen(2222)