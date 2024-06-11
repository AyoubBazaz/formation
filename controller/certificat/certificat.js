const certificat = require("../../model/certificat/certificat")
const client = require("../../model/client/client")
const formateur = require("../../model/formateur/formateur")

module.exports={
    create: async(req , res)=>{
        try{
        const {date,realiser,Libelle,Objectifs,Contenu,Prerequis,populationcible,duree,prixforfaitjour,
            idCertificat,idCatalogue,idPlanification,idformateur,idspecialite,idtype,nomClient,prenomClient,typeClient,telClient,emailClient,
            adresseClient,villeClient,paysClient,iceClient,numerocompteClient,raisonSocialeClient,chemin,libelle}=req.body
        //formation
        const formation =new formation({Libelle,Objectifs,Contenu,Prerequis,populationcible,duree,prixforfaitjour,
            idCertificat,idCatalogue,idPlanification,idformateur,idspecialite,idtype})
        await formation.save()
        //client
        const clients = new  client({nomClient,prenomClient,typeClient,telClient,emailClient,adresseClient,villeClient,paysClient,iceClient,numerocompteClient,raisonSocialeClient})
        await clients.save()
        //certificat
        const user= await  certificat.create({chemin,libelle,idClient:clients._id,idFormation:formation._id})
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
            const users = await certificat.find()
            return res.json(users);
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    },    
    showId: async (req, res) => {
        const id = req.params.id;
        try {
            const user = await certificat.findById({_id:id});
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
            const userUpdate = await certificat.findByIdAndUpdate(id, req.params.id ,{ new: true });
            if (!userUpdate) {
                return res.status(404).json({ message: "User not found" });
            } else {
                const data= await certificat.findOneAndUpdate(
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
          await certificat.deleteOne({ _id: req.params.id });
          res.status(201).json({ message: "User deleted with success" });
        } catch (error) {
          console.log(error.message);
        }
    }
}