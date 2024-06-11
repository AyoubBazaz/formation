const mongoose=require('mongoose')

const typeSchema=mongoose.Schema({
    LibelleType:{
        type:String,
    }
}, { timestamps: true })

const type=mongoose.model('type',typeSchema)
module.exports=type