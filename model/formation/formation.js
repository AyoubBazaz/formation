const mongoose=require('mongoose')

const formationSchema=mongoose.Schema({
    Libelle:{
        type:String,
    },
    Objectifs:{
        type:String,
    },
    Contenu:{
        type:String,
    },
    Prerequis:{
        type:String,
    },
    populationcible:{
        type:String,
    },
    duree:{
        type:Number,
    },
    prixforfaitjour:{
        type:String,
    },
    idCertificat :{
        type:String,
    },
    idCatalogue :{
        type:String,
    },
    idPlanification :{
        type:String,
    },
    idformateur :{
        type:String,
    },
    idspecialite :{
        type:String,
    },
    idtype :{
        type:String,
    },
}, { timestamps: true })

const formation=mongoose.model('formation',formationSchema)
module.exports=formation;