const mongoose = require('mongoose')
const {Schema, model} = mongoose;

const PostSchema = new Schema({
    summary:String, //summary
    cover:String,   //file
}, {
    timestamps: true,
})

const PostModel = model('Post', PostSchema)

module.exports = PostModel;