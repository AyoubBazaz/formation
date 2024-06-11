const express=require('express')
const router=new express.Router()

const User=require('../controller/auth/auth')
const formateur=require('../controller/formateur/formateur')
const formation=require('../controller/formation/formation')
const certificat=require('../controller/certificat/certificat')
const planification=require('../controller/planification/planification')
const catalogue=require('../controller/catalogue/catalogue')
const client=require('../controller/client/client')

//User
router.post('/inscription',User.inscription)
router.post('/login',User.connexion)

//formateur
router.post('/formateur',User.authenticateToken,formateur.create);
router.get('/formateur',User.authenticateToken,formateur.show)
router.get('/formateur/:id',formateur.showId)
router.put('/formateur/:id',formateur.update)
router.delete('/formateur/:id',formateur.delete )

//formation
router.post('/formation',User.authenticateToken,formation.create);
router.get('/formation',User.authenticateToken,formation.show)
router.get('/formation/:id',User.authenticateToken,formation.showId)
router.put('/formation/:id',User.authenticateToken,formation.update)
router.delete('/formation/:id',User.authenticateToken,formation.delete )

//certificat
router.post('/certificat',User.authenticateToken,certificat.create);
router.get('/certificat',User.authenticateToken,certificat.show)
router.get('/certificat/:id',User.authenticateToken,certificat.showId)
router.put('/certificat/:id',User.authenticateToken,certificat.update)
router.delete('/certificat/:id',User.authenticateToken,certificat.delete )

//planification
router.post('/planification',User.authenticateToken,planification.create);
router.get('/planification',User.authenticateToken,planification.show)
router.get('/planification/:id',User.authenticateToken,planification.showId)
router.put('/planification/:id',User.authenticateToken,planification.update)
router.delete('/planification/:id',User.authenticateToken,planification.delete )

//catalogue
router.post('/catalogue',User.authenticateToken,catalogue.create);
router.get('/catalogue',User.authenticateToken,catalogue.show)
router.get('/catalogue/:id',User.authenticateToken,catalogue.showId)
router.put('/catalogue/:id',User.authenticateToken,catalogue.update)
router.delete('/catalogue/:id',User.authenticateToken,catalogue.delete )

//client
router.post('/client',User.authenticateToken,client.create);
router.get('/client',User.authenticateToken,client.show)
router.get('/client/:id',User.authenticateToken,client.showId)
router.put('/client/:id',User.authenticateToken,client.update)
router.delete('/client/:id',User.authenticateToken,client.delete )

module.exports=router;