const mongoose = require('mongoose')
const {Schema, model} = mongoose;

const PostSchema = new Schema({
    summary:String, //summary
    cover:String,   //file
    author: {type:Schema.Types.ObjectId, ref:'User'},
}, {
    timestamps: true,
})

const PostModel = model('Post', PostSchema)

module.exports = PostModel;