const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')

const routes = require('./routes')

const app = express()

const server = require('http').Server(app)

mongoose.connect('mongodb+srv://omnistack:omnistack@cluster0-qwouv.mongodb.net/week10?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

app.use(cors())
app.use(express.json())
app.use(routes)

server.listen(3232, '0.0.0.0')