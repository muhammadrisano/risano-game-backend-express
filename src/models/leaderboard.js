require('dotenv').config()
const connection = require('../configs/db')
module.exports = {
    getLeaderboard: (page) => {
        return new Promise((resolve, reject) => {
            if (page) {
                connection.query("SELECT id_score, id_user, score, created_at, updated_at, fullname FROM score_points INNER JOIN user ON score_points.id_user = user.id_user ORDER BY score desc LIMIT " + (page * 10 - 10) + ", 10", (err, result) => {
                    if (!err) {
                        resolve(result)
                    } else {
                        reject(new Error(err))
                    }
                })
            } else {
                connection.query("SELECT id_score, id_user, score, created_at, updated_at, fullname FROM score_points INNER JOIN user ON score_points.id_user = user.id_user ORDER BY score desc", (err, result) => {
                    if (!err) {
                        resolve(result)
                    } else {
                        reject(new Error(err))
                    }
                })
            }
        })
    },
    LeaderboardDetail: (id_leaderboard) => {
        return new Promise((resolve, reject) => {
            connection.query("SELECT id_score, id_user, score, created_at, updated_at, fullname FROM score_points INNER JOIN user ON score_points.id_user = user.id_user WHERE id_leaderboard = ?", id_leaderboard, (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(new Error(err))
                }
            })
        })
    },
    insertLeaderboard: (data) => {

    }


}