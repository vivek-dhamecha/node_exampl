const mongoose = require('mongoose');
const Data = new mongoose.Schema({
    name:{
     type: String,
    required: true
    },

    surname:{
        type: String,
        required: true
    },
    username:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
});

const detail = mongoose.model('detail' , Data , 'my_third_example');

module.exports = detail;