const express = require('express');
const Route = express.Route();
const userController = require('../controllers/user')

Route
    .get('/', userController.getUser)
    .get('/:id_user', userController.userDetail)
    // .patch('/:id_user', userController.updateUser)
    .post('/register', userController.register)
    .post('/login', userController.login)
    .delete('/:id_user', userController.deleteUser)

module.exports = Route;