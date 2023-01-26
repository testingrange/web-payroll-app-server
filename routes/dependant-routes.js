const express = require('express')
const router = express.Router()

const Employee = require('../models/employee')
const {handle404} = require('../lib/custom-errors')



// CREATE
// POST /dependants

router.post('/dependants', (req, res, next) => {
    const employeeId = req.body.dependant.employeeId
    const dependantBody = req.body.dependant

    Employee.findById(employeeId)
        .then(handle404)
        .then(employee => {
            employee.dependants.push(dependantBody)
            return employee.save()
        })
        .then(employee => {
            res.sendStatus(201).json({ employee: employee})
        })
        .catch(next)
})


// UPDATE
// PATCH /employees/:dependantId

router.patch('/employees/:dependantId', (req, res, next) => {
    const employeeId = req.body.dependant.employeeId
    const dependantBody = req.body.dependant

    Employee.findById(employeeId)
        .then(handle404)
        .then(employee => {
            const dependant = employee.dependants.id(req.params.dependantId)
            dependant.set(dependantBody)
            return employee.save()
        })
        .then(() => res.sendStatus(204))
        .catch(next)
})


// DELETE
// DELETE /employee/:dependantId

router.delete('/employees/:dependantId', (req, res, next) => {
    const employeeId = req.body.dependant.employeeId

    Employee.findById(employeeId)
        .then(handle404)
        .then(employee => {
            employee.dependants.id(req.params.dependantId).remove()
            return employee.save()
        })
        .then(() => res.sendStatus(204))
        .catch(next)
})

module.exports = router
