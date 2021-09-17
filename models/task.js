const mongoose = require('mongoose');

const taskSchema = mongoose.Schema({
    title:{type:String,required:[true,'title can not be empty'],trim:true,maxlength:80},
    description: {type:String,required:[true,'description can not be empty'],trim:false},
    priority: {type:String,required:[true,'priority can not be empty']},
    date: {type:String,required:[true,'date can not be empty']},
    time: {type:String,required:[true,'time can not be empty']},
    completed: {type: Boolean, default: false},
    user_id:{type:String,required:true}
})

module.exports = mongoose.model('Task', taskSchema)