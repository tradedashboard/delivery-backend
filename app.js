
const express = require('express')
const cors = require('cors')
const app = express()
app.use(express.json())
app.use(cors())
const delivery = require('./routes/start.routes')
app.use('/api/v1/user/', delivery)
module.exports = app
