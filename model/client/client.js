const mongoose=require('mongoose')

const ClientSchema=mongoose.Schema({
    nomClient:{
        typr:String
    },
    prenomClient:{
        typr:String
    },
    typeClient:{
        typr:String
    },
    telClient:{
        typr:String
    },
    paysClient:{
        typr:String
    },
    villeClient:{
        typr:String
    },
    adresseClient:{
        typr:String
    },
    emailClient:{
        typr:String
    },
    iceClient:{
        typr:String
    },
    numerocompteClient:{
        typr:String
    },
    raisonSocialeClient:{
        typr:String
    }

},{timestamp:true})
const client =mongoose.model('client',ClientSchema)
module.exports=client