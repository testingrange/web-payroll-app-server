const mongoose = require('mongoose')

mongoose.Promise = Promise

mongoose.connect('mongodb://127.0.0.1:27017/web-payroll', { useNewUrlParser: true, useUnifiedTopology: true})
.then((conn) => {
    console.log(`Connected to mongodb on ${conn} db`)
})
.catch(err => {
    console.error(err)
})


module.exports = mongoose