"use strict"

const { param } = require('../app')


var validator = require('validator')
var Book = require('../models/book')

let controller = {
    datosLibro: (req, res) => {
        let libro = req.body.libro

        return res.status(200).send({

        })
    },
    index: (req, res) => {
        return res.status(200).send(`
        <div style="min-height:100vh; display: flex; justify-content: center">
        <h1 style="text-align:center; margin: auto;">API REST EDITORIAL</h1>
        </div>`)
    },
    test: (req, res) => {
        return res.status(200).send([
            {
                libro: "Orlando Vengador",
                autor: "Rubén Fonseca"
            },
            {
                libro: "Osqui quiere volar",
                autor: "Laura Cano Sastre"
            }
        ])
    },
    save: (req, res) => {
        var params = req.body
        try {
            var validation_title = !validator.isEmpty(params.titulo)
            var validation_autor = !validator.isEmpty(params.autor)
        }
        catch(err) {
            return res.status(200).send({
                message: "Faltan datos por enviar"
            })
        }
        if( validation_title && validation_autor) {
            var book = new Book;
            book.titulo = params.titulo
            book.autor = params.autor
            book.genero = params.genero
            book.portada = params.portada

            book.save((err, bookStored ) => {

                if( err, !bookStored) {
                    return res.status(404).send({
                        status: error,
                        message: "No se ha podido guardar el elemento en la base de datos"
                    })
                }

                console.log(book)
                return res.status(200).send({
                    status: "success",
                    book: bookStored
                })

            })

            
        }
        else {
            return res.status(200).send({
                status: "error",
                message: "Datos incompletos"
            })
        }
    },
    getBooks: (req, res) => {

        Book.find({}).sort('-_id').exec((err, books) => {
            if(err) {
                return res.status(500).send({
                    status: error,
                    message: "Error de conexión con base de datos"
                })
            }
            else if(!books) {
                return res.status(404).send({
                    status: "error",
                    message: "No hay libros en el catálogo"
                })
            }

            return res.status(200).send({
                status: "success",
                libros: books
            })

        } )

    },
    getBook: (req, res) => {
        return res.status(200).send({
            status: "success"
      })
    },
    update: (req, res) => {

    },
    delete: (req, res) => {

    }
}


module.exports = controller