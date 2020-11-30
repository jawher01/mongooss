const mongoose=require('mongoose');


const Shechma = mongoose.Schema({
  name: {type: String, required: true},
  email: {type: String, required: true},
  phone:Number
});

const Contact=mongoose.model('contact', Schema);

module.exports=Contact;