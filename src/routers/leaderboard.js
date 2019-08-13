const express = require('express');
const Route = express.Router();
const leaderboardController = require('../controllers/leaderboard')
const Auth = require('../helpers/auth')

Route
    .all('/*', Auth.authInfo)
    .get('/', leaderboardController.getLeaderboard)
    .get('/:id_user', leaderboardController.leaderboardDetail)
    .post('/', leaderboardController.insertLeaderboard)
    .patch('/:id_user', userController.updateUser)
    .delete('/:id_user', leaderboardController.deleteLeaderboard)

module.exports = Route;