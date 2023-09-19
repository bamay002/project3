const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors())
app.use(express.json())

app.post('/signup', (req,res) => {
    const {username,password,repeatPassword} = req.body
    res.json({requestData:{username,password,repeatPassword}})
})
// beebz chisme-blog

// mongodb+srv://beebz:<password>@cluster0.vaswuxp.mongodb.net/?retryWrites=true&w=majority
app.listen(2222)