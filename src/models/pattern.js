require('dotenv').config()
const connection = require('../configs/db')
module.exports = {
    getPattern: (page) => {
        return new Promise((resolve, reject) => {
            connection.query("SELECT * FROM pattern ", (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(new Error(err))
                }
            })
        })
    },
    patternDetail: (id_pattern) => {
        console.log(id_pattern)
        return new Promise((resolve, reject) => {
            connection.query("SELECT * FROM pattern WHERE id_pattern =?", id_pattern, (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(new Error(err))
                }
            })
        })
    },
    insertPattern: (data) => {
        return new Promise((resolve, reject) => {
            connection.query("INSERT INTO pattern SET ?", data, (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(new Error(err))
                }
            })
        })

    },
    deletePattern: (id_pattern) => {
        return new Promise((resolve, reject) => {
            connection.query("DELETE FROM pattern WHERE id_pattern = ?", id_pattern, (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(new Error(err))
                }
            })
        })
    },
    updatePattern: (id_pattern, data) => {
        return new Promise((resolve, reject) => {
            connection.query("UPDATE pattern SET ? WHERE id_pattern = ?", [data, id_pattern], (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(new Error(err))
                }
            })
        })
    }


}