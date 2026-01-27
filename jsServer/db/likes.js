let mongoose = require('mongoose')
const { Schema } = mongoose;
const likeInfo = new Schema({
    likes: Number, 
    views: Number
})

module.exports = mongoose.model("Likes", likeInfo)