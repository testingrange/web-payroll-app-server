const express = require('express')

const router = express.Router()

const Employee = require('../models/employee')

const empoyees = require('../data/employees.json')

router.get('/employees', (req, res, next) => {
    Employee.deleteMany({})
        .then(() => {
            Employee.create(employees)
                .then(people => {
                    res.status(200).json({ employee: employee})
                })
        })
        .catch(console.error)
})

module.exports = router
