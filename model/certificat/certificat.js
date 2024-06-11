const mongoose =require('mongoose')

const certificatSchema=mongoose.Schema({
    libelle:{
        type:String
    },
    chemin:{
        type:String
    },
    idFormation:{
        type:String
    },
    idClient:{
        type:String
    },

})

const certificat=mongoose.model('certificat',certificatSchema)
module.exports=certificat