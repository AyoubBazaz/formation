const mongoose=require('mongoose')

const formateurSchema=mongoose.Schema({
    nom:{
        type:String,
        require:true
    },
    prenom:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true,
        unique:true
    },
    tel:{
        type:Number,
        require:true
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
    genre:{
        type:String,
        require:true
    },
    situationFamiliale:{
        type:String,
        require:true
    },
    dateNaissance:{
        type:Date,
        require:true
    },
    anneeExperience:{
        type:Number,
        require:true
    },
    cin:{
        type:String,
        require:true,
        unique:true
    },
    idFormation:{
        type:String
    },
    idPlanification:{
        type:String
    },
    idSpecialite:{
        type:String
    }
    
}, { timestamps: true })

const formateur=mongoose.model('formateur',formateurSchema)
module.exports=formateur;