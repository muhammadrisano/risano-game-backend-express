const express = require('express');
const Route = express.Router();
const patternController = require('../controllers/pattern')
const Auth = require('../helpers/auth')

Route
    .all('/*', Auth.authInfo)
    .get('/', patternController.getPattern)
    .get('/:id_pattern', patternController.patternDetail)
    .post('/', patternController.insertPattern)
    .patch('/:id_pattern', patternController.updatePattern)
    .delete('/:id_pattern', patternController.deletePattern)

module.exports = Route;