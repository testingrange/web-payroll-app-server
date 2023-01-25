const express = require('express')
const mongoose = require('./config/connection')
const cors = require('cors')


const PORT = 8001



mongoose.set('strictQuery', true)

const app = express()

app.use(cors({ origin: 'http://127.0.0.1:5501' }))

app.use(express.json())









app.listen(PORT, () => {
    console.log('listening on ' + PORT)
})


module.exports = app