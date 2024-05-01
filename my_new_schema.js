const mongoose = require('mongoose');
const myschema = new mongoose.Schema({
  Emp_name:{
    type:String,
    required: true
   } , 
   Emp_roll:{
    type:Number,
    required: true
  } ,
  Emp_address:{
    type:String,
    required: true
  } ,

  Emp_age:{
    type:Number,
    required: true
  }


});

const Detail = mongoose.model('Detail' , myschema , 'EMP_DATA');

module.exports = {Detail};