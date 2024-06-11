const mongoose=require('mongoose')

const catalogueSchema=mongoose.Schema({
    libelleCat:{
        type:String,
    },
    annee:{
        type:Date,
    }
}, { timestamps: true })

const catalogue=mongoose.model('catalogue',catalogueSchema)
module.exports=catalogue