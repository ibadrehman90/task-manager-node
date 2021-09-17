const { json } = require('express/lib/response');
const Signup = require('../models/registration');

const signup = async (req,res) => {
    try {
        const check_email = await Signup.findOne({email:req.body.email})
        if(check_email.email){
            return res.status(200).json({msg:'Email already exist'});
        }
    } catch (error) {
        // res.status(500).json({msg:error}) 
        try {
            const user = await Signup.create(req.body)
            res.status(201).json({msg:'success',body:user})
        } catch (error) {
            res.status(500).json({msg:error}) 
        }
    }
}

const login = async (req,res) => {
    try {
        const user = await Signup.findOne({email:req.body.email,password:req.body.password})
        res.status(200).json({msg:'success',body:user._id});
    } catch (error) {
        res.status(404).json({msg:error})  
    }
}

module.exports = {
    signup,login
}