const mongoose = require('mongoose');

const signupSchema = mongoose.Schema({
    full_name:{type:String,required:[true,'name can not be empty'],trim:true,maxlength:80},
    email: {type:String,required:[true,'email can not be empty'],trim:true},
    password: {type:String,required:[true,'password can not be empty']}
})

module.exports = mongoose.model('Signup', signupSchema)