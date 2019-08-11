require('dotenv').config()
const connection = require('../configs/db')

module.exports = {
    getUser: (search) => {
        return new Promise((resolve, reject) => {
            if (search) {
                connection.query("SELECT * FROM user WHERE fullname LIKE ? OR username LIKE ? OR email LIKE ?", [`%${search}%`, `%${search}%`, `%${search}%`], (err, result) => {
                    if (!err) {
                        resolve(result)
                    } else {
                        reject(new Error(err))
                    }
                })
            } else {
                connection.query("SELECT * FROM user", (err, result) => {
                    if (!err) {
                        resolve(result)
                    } else {
                        reject(new Error(err))
                    }
                })
            }
        })
    },
    userDetail: (id_user) => {
        return new Promise((resolve, reject) => {
            connection.query("SELECT * FROM user WHERE id_user = ?", id_user, (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(new Error(err))
                }
            })
        })
    },
    register: (data) => {
        return new Promise((resolve, reject) => {
            connection.query('INSERT INTO user SET ?', data, (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(err)
                }
            })
        })
    },
    getByUsername: (username) => {
        return new Promise((resolve, reject) => {
            connection.query('SELECT * FROM user WHERE username = ?', username, (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(new Error(err))
                }
            })
        })
    },

    delete: (id_user) => {
        return new Promise((resolve, reject) => {
            connection.query("DELETE FROM user WHERE id_user = ?", id_user, (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(new Error)
                }
            })
        })
    }




}