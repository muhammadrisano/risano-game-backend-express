const patternModels = require('../models/pattern')
const MiscHelper = require('../helpers/helpers')

module.exports = {
    getPattern: (req, res) => {
        patternModels.getPattern()
            .then((resultpattern) => {
                const result = resultpattern
                MiscHelper.response(res, result, 200)
            })
            .catch((err) => {
                console.log(err)
            })
    },
    patternDetail: (req, res) => {

        const id_pattern = req.params.id_pattern
        console.log(id_pattern)
        patternModels.patternDetail(id_pattern)
            .then((resultpattern) => {
                const result = resultpattern
                MiscHelper.response(res, result, 200)
            })
            .catch((err) => {
                console.log(err)
            })
    },
    insertPattern: (req, res) => {
        const { pattern, delay, level } = req.body
        const data = {
            pattern,
            delay,
            level
        }
        patternModels.insertPattern(data)
            .then((resultpattern) => {
                const result = resultpattern
                MiscHelper.response(res, result, 200, data)
            })
            .catch((err) => {
                console.log(err)
            })
    },
    updatePattern: (req, res) => {
        const id_pattern = req.params.id_pattern
        const { pattern, delay, level } = req.body
        const data = {
            pattern,
            delay,
            level,
        }
        patternModels.updatePattern(id_pattern, data)
            .then((resultpattern) => {
                const result = resultpattern
                MiscHelper.response(res, result, 200)
            })
            .catch((err) => {
                console.log(err)
            })
    },
    deletePattern: (req, res) => {
        const id_pattern = req.params.id_pattern
        patternModels.deletePattern(id_pattern)
            .then((resultpattern) => {
                const result = resultpattern
                MiscHelper.response(res, result, 200)
            })
            .catch((err) => {
                console.log(err)
            })
    }
}

