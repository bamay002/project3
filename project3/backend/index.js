const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const User = require('./models/User');
const app = express();

app.use(cors());
app.use(express.json());

const db = mongoose.connection;

mongoose.connect('mongodb+srv://beebz:chisme-blog@cluster0.vaswuxp.mongodb.net/chisme?retryWrites=true&w=majority' , {
    useNewUrlParser: true,
    useUnifiedTopology: true
});


db.on('connected', () => {
  console.log('Mongoose connected to MongoDB Atlas');
});

db.on('error', (err) => {
  console.error('Error connecting to MongoDB Atlas:', err);
});

db.on('disconnected', () => {
  console.log('Mongoose disconnected from MongoDB Atlas');
});


app.post('/signup', async (req,res) => {
    try{
        const {username,password} = req.body;
        const userDoc = await User.create({username,password});
        res.json(userDoc);
    } catch(e){
        res.status(400).json(e)
    }
    
})


app.listen(2222);