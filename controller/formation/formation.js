const certificat = require('../../model/certificat/certificat')
const formateur = require('../../model/formateur/formateur')
const formation = require('../../model/formation/formation')
const planification = require('../../model/planification/planification')
const specialite = require('../../model/specialite/specialite')
const type = require('../../model/type/type')

module.exports={

    create: async(req , res)=>{
        try{
            const {Libelle,Objectifs,Contenu,Prerequis,populationcible,duree,prixforfaitjour,
                idCertificat,idCatalogue,idPlanification,idformateur,idspecialiste,idtype,Nom,Prenom,email,CIN,
                Tel,
                genre,
                Situationfamiliale,
                datenaissance,
                adresse,LibelleType,
                ville,
                anneexp,
                pays,libelleSpec,libelleCat,annee,date,realiser}=req.body

            //catalogue
            const catalogue=new catalogue({libelleCat,annee})
            await catalogue.save()
            //planification
            const planification= new planification({date,realiser})
            await planification.save()
            //formateur
            const formateur= new formateur({Nom,Prenom,email,CIN,
                Tel,
                genre,
                Situationfamiliale,
                datenaissance,
                adresse,
                ville,
                anneexp,
                pays})
                await formateur.save()
                //specialite
                const specialite=new specialite({libelleSpec})
                await specialite.save()
                //certificat
                const certificat= new certificat({Libelle,Chemin})
                await certificat.save()
                //type
                const type=new type({LibelleType})
                await type.save()
                //formation
            const formation=new formation({Libelle,Objectifs,Contenu,Prerequis,populationcible,duree,prixforfaitjour,
                idCertificat:certificat._id,idCatalogue:catalogue._id,idPlanification:planification._id,idformateur:formateur._id,idspecialite:specialite._id,idtype:type._id})
            const formationData= await formation.save();
            return res.send(formationData);
        }catch(err){

        }
    },
    /*userID: async (req , res)=>{
        const id = req.params.id;
        try {
            const userData = await formation.findById(id);
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
            const users = await formation.find()
            return res.json(users);
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    },    
    showId: async (req, res) => {
        const id = req.params.id;
        try {
            const user = await formation.findById({_id:id});
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
            const userUpdate = await formation.findByIdAndUpdate(id, req.params.id ,{ new: true });
            if (!userUpdate) {
                return res.status(404).json({ message: "User not found" });
            } else {
                const data= await formation.findOneAndUpdate(
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
          await formation.deleteOne({ _id: req.params.id });
          res.status(201).json({ message: "User deleted with success" });
        } catch (error) {
          console.log(error.message);
        }
    }
}