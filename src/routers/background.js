const express = require('express');
const Route = express.Router();
const backgroundController = require('../controllers/background')
const Auth = require('../helpers/auth')

Route
    .all('/*', Auth.authInfo)
    .get('/', backgroundController.getBackground)
    .get('/:id_background', backgroundController.backgroundDetail)
    .post('/', backgroundController.insertBackground)
    .patch('/:id_background', backgroundController.updateBackground)
    .delete('/:id_background', backgroundController.deleteBackground)

module.exports = Route;