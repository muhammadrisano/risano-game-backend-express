const backgroundModels = require('../models/background')
const MiscHelper = require('../helpers/helpers')

module.exports = {
    getBackground: (req, res) => {
        backgroundModels.getBackground()
            .then((resultbackground) => {
                const result = resultbackground
                MiscHelper.response(res, result, 200)
            })
            .catch((err) => {
                console.log(err)
            })
    },
    backgroundDetail: (req, res) => {
        const id_background = req.params.id_background
        console.log(id_background)
        backgroundModels.backgroundDetail(id_background)
            .then((resultbackground) => {
                const result = resultbackground
                MiscHelper.response(res, result, 200)
            })
            .catch((err) => {
                console.log(err)
            })
    },
    insertBackground: (req, res) => {
        const { level, music, images, delay } = req.body
        const data = {
            level,
            music,
            images,
            delay
        }
        backgroundModels.insertBackground(data)
            .then((resultbackground) => {
                const result = resultbackground
                MiscHelper.response(res, result, 200, data)
            })
            .catch((err) => {
                console.log(err)
            })
    },
    updateBackground: (req, res) => {
        const id_background = req.params.id_background
        const { level, music, images, delay } = req.body
        const data = {
            level,
            music,
            images,
            delay
        }
        backgroundModels.updateBackground(id_background, data)
            .then((resultbackground) => {
                const result = resultbackground
                MiscHelper.response(res, result, 200)
            })
            .catch((err) => {
                console.log(err)
            })
    },
    deleteBackground: (req, res) => {
        const id_background = req.params.id_background
        backgroundModels.deleteBackground(id_background)
            .then((resultbackground) => {
                const result = resultbackground
                MiscHelper.response(res, result, 200)
            })
            .catch((err) => {
                console.log(err)
            })
    }
}

