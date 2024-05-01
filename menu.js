const mongoose = require('mongoose');
const menu_item_schema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    price:{
        type:Number,
        required:true,
    },
    taste:{
        type:String,
        enum:["sweet" , "spicy" , "sour"],
        required:true,
       
    },
    is_drink:{
        type:Boolean,
        default:false,
    },

    ingrediants:{
        type:[String],
        default:[],
    },
    num_sales:{
        type:Number,
        default:0,
    }
});

const menu_item = mongoose.model('menu_item' , menu_item_schema , 'my_menu');

module.exports = menu_item ;
