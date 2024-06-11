const mongoose=require('mongoose')

const planificationSchema=mongoose.Schema({
    date:{
        type:Date
    },
    realiser:{
        type:Boolean
    },
    idFormation:{
        type:String
    },
    idFormateur:{
        type:String
    },
    idClient:{
        type:String
    },
    idLocal:{
        type:String
    },
}, { timestamps: true })
const planification=mongoose.model('planification',planificationSchema)
module.exports=planification