require('dotenv')
const express = require('express')
const bodyParser = require('body-parser')
const app = express();
const port = process.env.SERVER_PORT;
const cors = require('cors')
const xssFilter = require('x-xss-protection');
const logger = require('morgan')
const userRoute = require('./src/router/user')
app.use(cors());
app.use(xssFilter());
app.use(logger('dev'))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use('/user', userRoute)
