"use strict"

require('dotenv').config()

const keyMongo = process.env.KEY_MONGO

let mongoose = require('mongoose')

let app = require('./app')


mongoose.set('strictQuery', false)

mongoose.Promise = global.Promise;
mongoose.connect(keyMongo).
then(() => {
    app.listen(3000, () => {
        console.log('App creada en el puerto 3000')
        console.log(keyMongo)
    })
})