require('dotenv').config()
const connection = require('../configs/db')
module.exports = {
    getButton: () => {
        return new Promise((resolve, reject) => {
            connection.query("SELECT * FROM button ", (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(new Error(err))
                }
            })
        })
    },
    buttonDetail: (id_button) => {
        console.log(id_button)
        return new Promise((resolve, reject) => {
            connection.query("SELECT * FROM button WHERE id_button =?", id_button, (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(new Error(err))
                }
            })
        })
    },
    insertButton: (data) => {
        return new Promise((resolve, reject) => {
            connection.query("INSERT INTO button SET ?", data, (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(new Error(err))
                }
            })
        })
    },
    deleteButton: (id_button) => {
        return new Promise((resolve, reject) => {
            connection.query("DELETE FROM button WHERE id_button = ?", id_button, (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(new Error(err))
                }
            })
        })
    },
    updateButton: (id_button, data) => {
        return new Promise((resolve, reject) => {
            connection.query("UPDATE button SET ? WHERE id_button = ?", [data, id_button], (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(new Error(err))
                }
            })
        })
    }
}