const  mongoose  = require("mongoose");

const UserSchema= mongoose.Schema({
    email:{
        type:String,
        require:true,
        unique:true
    },
    password:{
        type:String,
        require:true,
    },
    role:{
        type:String,
        enum: ['user', 'admin'],
        default: 'user'
    }
}, { timestamps: true })

const UserModel=mongoose.model('connexion',UserSchema)
module.exports=UserModel

