const mongoose = require('mongoose');

//define the person Schema

// const personSchema = new mongoose.Schema({

// })


const personschema = new mongoose.Schema({
    name:{
        type:String,
        required : true,
    },
    age:{
        type: Number,
        
    },
    work:{
        type:String,
        enum: ["manager" , "waiter" , "chef"],
        required:true
    },
    mobile:{
        type:String,
        require:true
    },
    email:{
        type:String,
        required: true,
        unique: true,
    },
    address:{
        type:String,
        required: true,
    },
    salary:{
        type:Number,
        required: true,
    }
});

const Person = mongoose.model('Person' , personschema , 'my_collection');

module.exports = 
    Person
;
