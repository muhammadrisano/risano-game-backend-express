require('dotenv').config();
const express = require('express')
const bodyParser = require('body-parser')
const app = express();
const port = process.env.SERVER_PORT;
const cors = require('cors')
const xssFilter = require('x-xss-protection');
const logger = require('morgan')
const userRoute = require('./src/routers/user')
const leaderboardRoute = require('./src/routers/leaderboard')
app.use(cors());
app.use(xssFilter());
app.use(logger('dev'))
app.listen(port, () => {
    console.log(`\n App Listen port ${port}`)
})
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use('/user', userRoute)
app.use('/leaderboard', leaderboardRoute)
