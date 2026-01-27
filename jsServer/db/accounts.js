const mongoose = require('mongoose');
const { Schema } = mongoose;
const userInfo = new Schema({
  name: String,
  email: String, 
  password: String, 
  id: String,
  date: Date,
  status: String, 
  phone: Number, 
  age: Number, 
  information: String,
  image: String
})

module.exports = mongoose.model('User', userInfo)