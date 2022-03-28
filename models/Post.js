const mongoose = require('mongoose');
const { required } = require('nodemon/lib/config');

const PostSchema= new mongoose.Schema({
    title:{
        type:String,
        required: true,
        unique:true
    },
    desc:{
        type:String,
        required: true,
    },
    photo:{
        type:String,
        required: false
    },
    username:{
        type:String,
        required: true
    },
    categories:{
        type:Array,
        required:false
    },
}, {timestamps:true});
module.exports = mongoose.model('User', PostSchema)