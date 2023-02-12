"use strict"

let express = require('express')

let BookController = require('../controllers/book')

let router = express.Router()
router.get('/', BookController.index)
router.get('/catalogo', BookController.getBooks)
router.get('/test-de-controlador', BookController.test)
router.post('/api/add-book', BookController.save)

module.exports = router