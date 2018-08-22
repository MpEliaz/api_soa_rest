let express = require('express')
let http = require('http')
let app = express()
let jwt = require('jsonwebtoken')

const port = process.env.port || 3000

app.get('/', (req, res) => {
    res.status(200).send("Welcome to API REST")
  })

  var users = ['oscar', 'juan', 'marcos']
 
  app.get('/users', (req, res) => {
    res.send(users)
  })

  app.post('/login', (req, res) => {
    //   var username = req.body.user
    //   var password = req.body.password
      var username = "elias"
      var password = "1234"

      console.log(req.body);
    
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
    
      var token = jwt.sign(tokenData, 'Secret Password', {
         expiresIn: 60 * 60 * 24 // expires in 24 hours
      })
    
      res.send({
        token
      })
    })
     
   
  http.createServer(app).listen(port, () => {
    console.log(`Server started at port: ${port}`);
  });