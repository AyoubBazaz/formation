const connexion=require('../../model/auth/User')
const inscription=require('../../model/auth/Client')
const bcrypt=require('bcryptjs')
const jwt=require('jsonwebtoken')
module.exports={
    inscription: async(req,res) =>{
        try{
            const {nom,prenom,type,tel,email,password,addresse,ville,pays,numeroCompte,role}=req.body;
            const hashedPassword=await bcrypt.hash(password, 10)

            const newuser= new connexion({email, password:hashedPassword,role})
            await newuser.save()

            const newclient = new inscription({idUser:newuser._id, nom , prenom , type , tel , addresse , ville , pays , numeroCompte})
            await newclient.save();

            res.status(201).send(newclient)
        }catch(err){
            console.log(`error : ${err}`);
            res.status(500).send('Server error');
        }
    },
    connexion: async(req,res)=>{
        const {email,password}=req.body;
        const user= await connexion.findOne({email})
        if(!user){
            return res.status(401).send('invalid credantials')
        }

        const validPassword= await bcrypt.compare(password, user.password)
        if(!validPassword){
            return res.status(401).send('invalid credantials')
        }
        const token = jwt.sign({ email: user.email, id: user._id,role: user.role }, "JWT_SECRET", {
            expiresIn: "1h",
          });
        
          res.json({ token });
    },
     authorize : (roles = []) => {
      if (typeof roles === 'string') {
          roles = [roles];
      }
  
      return (req, res, next) => {
          if (!roles.length || roles.includes(req.user.role)) {
              next();
          } else {
              res.status(403).send('Forbidden');
          }
      };
  },  
    authenticateToken:(req, res, next)=> {
        const token = req.header('Authorization')?.replace('Bearer ', '');
        if (!token) {
          return res.status(401).send('Access denied. No token provided.');
        }
      
        try {
          const decoded = jwt.verify(token, "JWT_SECRET");
          req.user = decoded;
          next();
        } catch (ex) {
          res.status(400).send('Invalid token.');
        }
      },
      protege: async (req, res) => {
        const userId = req.user.id;
        const client = await inscription.findOne({ idUser: userId });
    
        if (!client) {
          return res.status(404).send('Client not found');
        }
        res.json(client);
      }



}