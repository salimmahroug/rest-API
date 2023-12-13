const User= require("../model/userSchema")


const addUser= async(req,res)=>{
    try{
        const newUser = new User(req.body)
        await newUser.save()
        res.status(200).json({msg:"user Added", newUser})
    }
    catch (err) {
        res.status(500).json({msg:err.message})
    }
}
const getUser=async(req,res)=>{
    
}
const updateUser=async(req,res)=>{
    
}
const delateUser=async(req,res)=>{
    
}


module.exports={addUser,getUser,updateUser,delateUser}


