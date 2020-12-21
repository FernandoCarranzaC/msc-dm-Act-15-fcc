const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')

const alumnos = require('./routes/alumnos')
const maestros = require('./routes/maestros')

const app = express()

app.use(bodyParser.json())
app.use(cors())

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })

app.use('/api/alumnos', alumnos)
app.use('/api/maestros', maestros)


module.exports = app