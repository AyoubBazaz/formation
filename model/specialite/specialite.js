const mongoose=require('mongoose')
const type = require('../type/type')

const specialiteSchema=mongoose.Schema({
    libelleSpec:{
        type:String
    }
}, { timestamps: true })

const specialite =mongoose.model('specialite',specialiteSchema)
module.exports=specialite 