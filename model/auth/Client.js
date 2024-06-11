const mongoose=require('mongoose')

const ClientSchema=mongoose.Schema({
    idUser:{
        type:String,
        require:true,
        unique:true
    },
    nom:{
        type:String,
        require:true
    },
    prenom:{
        type:String,
        require:true
    },
    type:{
        type:String,
        require:true
    },
    tel:{
        type:String,
    },
    addresse:{
        type:String,
        require:true
    },
    ville:{
        type:String,
        require:true
    },
    pays:{
        type:String,
        require:true
    },
    numeroCompte:{
        type:String,
        require:true
    }
}, { timestamps: true })

const ClientModel=mongoose.model('inscription',ClientSchema)
module.exports=ClientModel