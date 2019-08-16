const express = require('express');
const Route = express.Router();
const buttonController = require('../controllers/button')
const Auth = require('../helpers/auth')

Route
    .all('/*', Auth.authInfo)
    .get('/', buttonController.getButton)
    .get('/:id_button', buttonController.buttonDetail)
    .post('/', buttonController.insertButton)
    .patch('/:id_button', buttonController.updateButton)
    .delete('/:id_button', buttonController.deleteButton)

module.exports = Route;