const express = require('express')
const mongoose = require('./config/connection')
const cors = require('cors')
const requestLogger = require('./lib/request-logger')

const PORT = 8001

const employeeRoutes = require('./routes/employee-routes')
const employeeSeed = require('./lib/employee-seed')
const dependantRoutes = require('./routes/dependant-routes')
const userRoutes = require('./routes/user-routes')



mongoose.set('strictQuery', true)

const app = express()

app.use(cors({ origin: 'http://127.0.0.1:5500' }))

app.use(express.json())

app.use(requestLogger)


// Employee routes
app.use(employeeRoutes)

// Employee seed data
app.use('/seed/employee', employeeSeed)

// Dependant routes
app.use(dependantRoutes)

// User routes
app.use(userRoutes)


app.listen(PORT, () => {
    console.log('listening on ' + PORT)
})


module.exports = app