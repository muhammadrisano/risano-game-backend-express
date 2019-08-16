const buttonModels = require('../models/button')
const MiscHelper = require('../helpers/helpers')

module.exports = {
    getButton: (req, res) => {
        buttonModels.getButton()
            .then((resultbutton) => {
                const result = resultbutton
                MiscHelper.response(res, result, 200)
            })
            .catch((err) => {
                console.log(err)
            })
    },
    buttonDetail: (req, res) => {
        const id_button = req.params.id_button
        console.log(id_button)
        buttonModels.buttonDetail(id_button)
            .then((resultbutton) => {
                const result = resultbutton
                MiscHelper.response(res, result, 200)
            })
            .catch((err) => {
                console.log(err)
            })
    },
    insertButton: (req, res) => {
        const { no_button, sound } = req.body
        const data = {
            no_button,
            sound,
        }
        buttonModels.insertButton(data)
            .then((resultbutton) => {
                const result = resultbutton
                MiscHelper.response(res, result, 200, data)
            })
            .catch((err) => {
                console.log(err)
            })
    },
    updateButton: (req, res) => {
        const id_button = req.params.id_button
        const { no_button, sound } = req.body
        const data = {
            no_button,
            sound
        }
        buttonModels.updateButton(id_button, data)
            .then((resultbutton) => {
                const result = resultbutton
                MiscHelper.response(res, result, 200)
            })
            .catch((err) => {
                console.log(err)
            })
    },
    deleteButton: (req, res) => {
        const id_button = req.params.id_button
        buttonModels.deleteButton(id_button)
            .then((resultbutton) => {
                const result = resultbutton
                MiscHelper.response(res, result, 200)
            })
            .catch((err) => {
                console.log(err)
            })
    }
}

