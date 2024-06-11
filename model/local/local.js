const mongoose=require('mongoose')

const localSchema=mongoose.Schema({
    adresse:{
        type:String,
    },
    ville:{
        type:String
    },
    pays:{
        type:String
    },
    etage:{
        type:String
    }
}, {timestamp:true})

const local=mongoose.model('local',localSchema)
module.exports=local