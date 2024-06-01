const mongoose = require('mongoose');
const auth = require('./auth.js');
const bcrypt = require('bcrypt');
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


//hash password generation
Data.pre('save' , async function(next){
    const detail = this;
    // hash the password only if it has been modified (or new )
    if(!detail.isModified('password')) return next();
    try{
     // hash password generation
     const salt = await bcrypt.genSalt(10);
     // hass password
     const hashedpassword = await bcrypt.hash(detail.password , salt);
     // override the plain password with the hashedpassword
     detail.password = hashedpassword;
    next();
    }
    catch(err){
     return next(err);
    }
});

Data.methods.comparepassword = async function (candidatepassword){
    try{
     const ismatch = await bcrypt.compare(candidatepassword , this.password);
    }
    catch(error){
        throw error;
    }
}


const detail = mongoose.model('detail' , Data , 'my_third_example');

module.exports = detail;