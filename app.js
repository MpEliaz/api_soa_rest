
let express = require('express')
let http = require('http')
let app = express()
let bodyParser = require('body-parser');
const api = require('./routes')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/api', api)
module.exports = app