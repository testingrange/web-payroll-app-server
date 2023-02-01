const express = require('express')
const router = express.Router()

const Employee = require('../models/employee')
const {handle404} = require('../lib/custom-errors')
const { requireToken } = require('../config/auth')


// CREATE
// POST /dependants

router.post('/dependants', requireToken, (req, res, next) => {
    const employeeId = req.body.dependant.employeeId    
    const dependantBody = req.body.dependant
    
    Employee.findById(employeeId)
        .then(handle404)
        .then(employee => {
            
            // console.log(employee)
            employee.dependants.push(dependantBody)
            return employee.save()
        })
        .then(employee => {
            res.status(201).json({ employee: employee})
        })
        .catch(next)
})


// UPDATE
// PATCH /dependants/:dependantId

router.patch('/dependants/:dependantId', requireToken, (req, res, next) => {
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
// DELETE /dependants/:dependantId

router.delete('/dependants/:employeeId/:dependantId', requireToken, (req, res, next) => {
    // const employeeId = req.body.dependant.employeeId
    const employeeId = req.params.employeeId

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