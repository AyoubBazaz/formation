const catalogue = require("../../model/catalogue/catalogue");

module.exports={
    create: async(req , res)=>{
        try{
        const {libelleCat,annee}=req.body      
        //catalogue
        const user= await  catalogue.create({libelleCat,annee})
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
            const users = await catalogue.find()
            return res.json(users);
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    },    
    showId: async (req, res) => {
        const id = req.params.id;
        try {
            const user = await catalogue.findById({_id:id});
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
            const userUpdate = await catalogue.findByIdAndUpdate(id, req.params.id ,{ new: true });
            if (!userUpdate) {
                return res.status(404).json({ message: "User not found" });
            } else {
                const data= await catalogue.findOneAndUpdate(
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
          await catalogue.deleteOne({ _id: req.params.id });
          res.status(201).json({ message: "User deleted with success" });
        } catch (error) {
          console.log(error.message);
        }
    }
}