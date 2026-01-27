const mongoose = require('mongoose')
const { Schema } = mongoose;
const itemInfo = new Schema({
    title: String, 
    price: Number, 
    count: Number 
})

module.exports = mongoose.model('Items', itemInfo);