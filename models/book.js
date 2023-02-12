"use strict"

let mongoose = require('mongoose')
let Schema = mongoose.Schema

let LibroSchema = Schema({
    titulo: String,
    autor: String,
    genero: String,
    publicacion: {type: Date, default: Date.now},
    portada: String
})

module.exports = mongoose.model('Libro', LibroSchema)