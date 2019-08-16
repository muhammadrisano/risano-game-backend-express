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
        const id_user = req.params.id_user
        leaderboardModels.leaderboardDetail(id_user)
            .then((resultLeader) => {
                const result = resultLeader
                leaderboardModels.getLeaderboard()
                    .then((resulall) => {
                        resultall = resulall
                        let rank = resulall.map((item, index) => {
                            if (parseInt(item.id_user) === parseInt(id_user)) {
                                return parseInt(index + 1)
                            }
                        })
                        let ranking = rank.find((item) => {
                            return item > 0
                        })


                        MiscHelper.response(res, result, 200, null, ranking)
                    })


                // MiscHelper.response(res, result, 200)
            })
            .catch((err) => {
                console.log(err)
            })
    },
    insertLeaderboard: (req, res) => {
        const id_user = req.body.id_user
        var datauser = null
        leaderboardModels.leaderboarduser(id_user)
            .then((resultLeader) => {
                const result = resultLeader
                datauser = result
                if (datauser.length > 0) {
                    const { score } = req.body
                    const id_user = req.body.id_user
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
                } else {
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
                }
            })
            .catch((err) => {
                console.log(err)
            })
        console.log(datauser)

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

