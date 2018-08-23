'use strict'
const express = require('express')
const copCtrl = require('../controllers/cop')
const userCtrl = require('../controllers/user')
const auth = require('../middlewares/auth')
const api = express.Router()

//api.post('/signin', copCtrl.validarUsuario)
api.post('/signup', userCtrl.signUp)
api.post('/signin', userCtrl.signIn)
api.post('/private', auth, function(req, res){
    res.status(200).send({message: 'Tienes acceso'})
})

module.exports = api