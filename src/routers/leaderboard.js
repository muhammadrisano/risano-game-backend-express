const express = require('express');
const Route = express.Router();
const leaderboardController = require('../controllers/leaderboard')
const Auth = require('../helpers/auth')

Route
    .all('/*', Auth.authInfo)
    .get('/', leaderboardController.getLeaderboard)
    .get('/:leaderboard', leaderboardController.leaderboardDetail)
    .post('/', leaderboardController.insertLeaderboard)
    .patch('/:id_user', leaderboardController.updateLeaderboard)
    .delete('/:id_leaderboard', leaderboardController.deleteLeaderboard)

module.exports = Route;