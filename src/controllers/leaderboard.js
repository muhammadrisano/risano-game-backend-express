const leaderboardModels = require('../models/leaderboard')
const MiscHelper = require('../helpers/helpers')

module.exports = {
    getLeaderboard: (req, res) => {
        const page = req.query.page
        console.log(page)
        leaderboardModels.getLeaderboard(page)
            .then((resultLeader) => {
                const result = resultLeader
                MiscHelper.response(res, result, 200)
            })
            .catch((err) => {
                console.log(err)
            })
    },
    leaderboardDetail: (req, res) => {
        const id_leaderboard = req.params.id_leaderboard
        leaderboardModels.leaderboardDetail(id_leaderboard)
            .then((resultLeader) => {
                const result = resultLeader
                MiscHelper.response(res, result, 200)
            })
            .catch((err) => {
                console.log(err)
            })
    },
    insertLeaderboard: (req, res) => {
        const { id_user, score } = req.body
        const data = {
            id_user,
            score,
            created_at: new Date(),
            updated_at: new Date()
        }
        leaderboardModels.insertLeaderboard(data)
            .then((resultLeader) => {
                const result = resultLeader
                MiscHelper.response(res, result, 200, data)
            })
            .catch((err) => {
                console.log(err)
            })
    },
    updateLeaderboard: (req, res) => {
        const id_user = req.params.id_user
        const { score } = req.body
        const data = {
            score,
            updated_at: new Date()
        }
        leaderboardModels.updateLeaderboard(id_user, data)
            .then((resultLeader) => {
                const result = resultLeader
                MiscHelper.response(res, result, 200)
            })
            .catch((err) => {
                console.log(err)
            })
    },
    deleteLeaderboard: (req, res) => {
        const id_leaderboard = req.params.id_leaderboard
        leaderboardModels.deleteLeaderboard(id_leaderboard)
            .then((resultLeader) => {
                const result = resultLeader
                MiscHelper.response(res, result, 200)
            })
            .catch((err) => {
                console.log(err)
            })
    }

}

