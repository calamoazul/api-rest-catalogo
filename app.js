"use strict"

let express = require('express')
let bodyParser = require('body-parser')
let apiRoutes = require('./routes/routes')

let app = express()

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use(apiRoutes)

module.exports = app