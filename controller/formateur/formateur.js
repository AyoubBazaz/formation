const formateur=require('../../model/formateur/formateur')
const formation = require('../../model/formation/formation')
const planification = require('../../model/planification/planification')
const specialite = require('../../model/specialite/specialite')
module.exports={
    create: async(req , res)=>{
        try{
        const {Nom,Prenom,email,CIN,
            Tel,
            genre,
            Situationfamiliale,
            datenaissance,
            adresse,
            ville,
            anneexp,
            pays,idFormation}=req.body
        //formation
        const formation =new formation({Libelle,Objectifs,Contenu,Prerequis,populationcible,duree,prixforfaitjour,
            idCertificat,idCatalogue,idPlanification,idformateur,idspecialite,idtype})
        await formation.save()
        //specialiste
        const specialite=new specialite({libelleSpec})
        await specialite.save()
        //plainification
        const planification= new planification({date,realiser})
        await plainification.save()        
        //formateur
        const user= await  formateur.create({Nom,
            Prenom,
            email,
            CIN,
            Tel,
            genre,
            situationFamiliale,
            datenaissance,
            adresse,
            ville,
            anneeExperience,
            pays,idSpecialite:specialite._id,idPlanification:planification._id,idFormation:formation._id})
        const userData= await user.save();
        return res.send(userData);
        } catch(err){

        }
    },
    /*userID: async (req , res)=>{
        const id = req.params.id;
        try {
            const userData = await formateur.findById(id);
            if (!userData) {
                return res.status(404).json({ message: "User not found" });
            }
            return res.json(userData);
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    
    },*/
    
    show: async (req, res) => {
        try {
            const users = await formateur.find()
            return res.json(users);
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    },    
    showId: async (req, res) => {
        const id = req.params.id;
        try {
            const user = await formateur.findById({_id:id});
            if (!user) {
                return res.status(404).json({ message: "User not found" });
            }
            return res.json(user);
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    },
    update: async (req, res) => {
        const id = req.params.id; 
        try {
            const userUpdate = await formateur.findByIdAndUpdate(id, req.params.id ,{ new: true });
            if (!userUpdate) {
                return res.status(404).json({ message: "User not found" });
            } else {
                const data= await formateur.findOneAndUpdate(
                    {_id: req.params.id },
                    req.body,
                    { new: true }
                );
                 res.status(201).json(data);
            }
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    },
    
    
    delete :async (req, res) => {
        const id = req.params.id;
        try {
          await formateur.deleteOne({ _id: req.params.id });
          res.status(201).json({ message: "User deleted with success" });
        } catch (error) {
          console.log(error.message);
        }
    }
}