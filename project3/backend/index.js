const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const User = require('./models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const { Navigate } = require('react-router-dom');
const app = express();
const multer = require('multer')
const uploadMiddleware = multer({ dest: 'uploads/' })
const fs = require('fs')
const Post = require('./models/Post') ;

const salt = bcrypt.genSaltSync(10) //hash password
const secret = 'abcdefghijklmnopqrstuvwxyz'

app.use(cors({credentials:true, origin:'http://localhost:3000'}));
app.use(express.json());
app.use(cookieParser());

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
        const userDoc = await User.create({
            username,
            password:bcrypt.hashSync(password,salt)
        });
        res.json(userDoc);
    } catch(e){
        res.status(400).json(e)
    }
    
})

app.post('/signin', async (req,res) => {
  const {username,password} = req.body;
  const userDoc = await User.findOne({username})
  const passOk = bcrypt.compareSync(password, userDoc.password);
  
  if (passOk){
    //logged in
    jwt.sign({username, id:userDoc._id}, secret, {}, (err, token)=> {
      if (err) throw err;
      res.cookie('token', token).json({
        id:userDoc._id,
        username,
      })
    })
  } else {
    res.status(400).json('wrong credentials')
  }
})

app.get('/profile', (req,res) => {
  const {token} = req.cookies;
  jwt.verify(token, secret, {}, (err,info) => {
    if (err) throw err;
    res.json(info);
  });
});

app.post('/logout', (req,res) => {
  res.cookie('token', '').json('ok')
})

app.post('/post',  uploadMiddleware.single('file'), async (req,res) => {
  //image 
  const {originalname, path} = req.file
  const parts = originalname.split('.')
  const ext = parts[parts.length - 1]
  const newPath = path+'.'+ext
  fs.renameSync(path, newPath)
  //post
  const {summary} = req.body
  const postDoc = await Post.create({
    summary,
    cover: newPath,
  })
  res.json({postDoc})

})
app.listen(2222);