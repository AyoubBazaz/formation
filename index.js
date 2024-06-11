const express=require('express')
const mongoose=require('mongoose')
const badyParser=require('body-parser')
const cors =require('cors')
const jwt=require('jsonwebtoken')
const bcrypt=require('bcryptjs')
const User=require('./model/auth/User')
const Client=require('./model/auth/Client')
const formateur=require('./model/formateur/formateur')
const formation=require('./model/formation/formation')
const catalogue=require('./model/catalogue/catalogue')
const planification=require('./model/planification/planification')
const specialite=require('./model/specialite/specialite')
const certificat=require('./model/certificat/certificat')
const local=require('./model/local/local')
const client=require('./model/client/client')
const type=require('./model/type/type')
const router=require('./route/route')
const app = express()
app.use(cors()) 
app.use(express.json())

mongoose.connect('mongodb://localhost:27017/formation')
.then(() => console.log('MongoDB connected'))
.catch(err => console.log(err));

app.use(router)

const port=3000
app.listen(port,(req,res)=>{
    console.log(`your connected on http://localhost:${port}`)
})