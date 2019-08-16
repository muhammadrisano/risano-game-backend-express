crypto = require('crypto');
module.exports = {
    response: (res, result, status, error, rank) => {
        let resultPrint = {}
        resultPrint.error = error || null
        resultPrint.status_code = status || 200
        // resultPrint.jumlah = data
        resultPrint.rank = rank || null
        resultPrint.result = result

        return res.status(resultPrint.status_code).json(resultPrint)
    },
    generateSalt: (length) => {
        return crypto.randomBytes(Math.ceil(length / 2)).toString('hex').slice(0, length)
    },
    setPassword: (password, salt) => {
        let hash = crypto.createHmac('sha512', salt)
        hash.update(password)
        let value = hash.digest('hex')
        return {
            salt: salt,
            passwordHash: value
        }
    }
}