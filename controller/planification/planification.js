const client = require("../../model/client/client")
const formateur = require("../../model/formateur/formateur")
const local = require("../../model/local/local")
const planification = require("../../model/planification/planification")

module.exports={
    create: async(req , res)=>{
        try{
        const {date,realiser,idClient,idFormateur,idFormation,Libelle,Objectifs,Contenu,Prerequis,populationcible,duree,prixforfaitjour,
            idCertificat,idCatalogue,idPlanification,idformateur,idspecialite,idtype,libelleSpecNom,Prenom,nomClient,prenomClient,typeClient,telClient,emailClient,
            adresseClient,villeClient,paysClient,iceClient,numerocompteClient,raisonSocialeClient,
            email,
            CIN,
            Tel,
            genre,
            situationFamiliale,
            datenaissance,
            adresse,
            ville,
            anneeExperience,
            pays,idSpecialite}=req.body
        //formation
        const formation =new formation({Libelle,Objectifs,Contenu,Prerequis,populationcible,duree,prixforfaitjour,
            idCertificat,idCatalogue,idPlanification,idformateur,idspecialite,idtype})
        await formation.save()
        //formateur
        const formateur= new  formateur({Nom,
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
            pays,idSpecialite,idPlanification,idFormation})
         await formateur.save();  
        //local
        const local=new local({etage,pays,ville,adresse}) 
        await local.save()
        //client
        const client = new client({nomClient,prenomClient,typeClient,telClient,emailClient,adresseClient,villeClient,paysClient,iceClient,numerocompteClient,raisonSocialeClient})
        await client.save()
        //planification
        const user= await  planification.create({date,realiser,idClient:client._id,idFormateur:formateur._id,idFormation:formation._id,idLocal:local._id})
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
            const users = await planification.find()
            return res.json(users);
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    },    
    showId: async (req, res) => {
        const id = req.params.id;
        try {
            const user = await planification.findById({_id:id});
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
            const userUpdate = await planification.findByIdAndUpdate(id, req.params.id ,{ new: true });
            if (!userUpdate) {
                return res.status(404).json({ message: "User not found" });
            } else {
                const data= await planification.findOneAndUpdate(
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
          await planification.deleteOne({ _id: req.params.id });
          res.status(201).json({ message: "User deleted with success" });
        } catch (error) {
          console.log(error.message);
        }
    }
}