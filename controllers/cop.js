'use strict'

let jwt = require('jsonwebtoken')

function validarUsuario (req, res) {
      var username = req.body.user
      var password = req.body.password
    
      if( !(username === 'elias' && password === '1234')){
        res.status(401).send({
          error: 'usuario o contraseña inválidos'
        })
        return
      }
    
      var tokenData = {
        username: username
        // ANY DATA
      }
    
      var token = jwt.sign(tokenData, 'elijah', {
         expiresIn: 60 * 60 * 24 // expires in 24 hours
      })
    
      res.send({
        token
      })
    }

    function signUp(req, res) {
      const user = new user({
        usuario
      })
}

function saludar (req, res) {
    res.send(200, "HOLA!!!")
}

module.exports = {
    validarUsuario,
    saludar
}