require('dotenv').config()
const connection = require('../configs/db')
module.exports = {
    getBackground: () => {
        return new Promise((resolve, reject) => {
            connection.query("SELECT * FROM background ", (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(new Error(err))
                }
            })
        })
    },
    backgroundDetail: (id_background) => {
        console.log(id_background)
        return new Promise((resolve, reject) => {
            connection.query("SELECT * FROM background WHERE id_background =?", id_background, (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(new Error(err))
                }
            })
        })
    },
    insertBackground: (data) => {
        return new Promise((resolve, reject) => {
            connection.query("INSERT INTO background SET ?", data, (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(new Error(err))
                }
            })
        })
    },
    deleteBackground: (id_background) => {
        return new Promise((resolve, reject) => {
            connection.query("DELETE FROM background WHERE id_background = ?", id_background, (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(new Error(err))
                }
            })
        })
    },
    updateBackground: (id_background, data) => {
        return new Promise((resolve, reject) => {
            connection.query("UPDATE background SET ? WHERE id_background = ?", [data, id_background], (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(new Error(err))
                }
            })
        })
    }
}