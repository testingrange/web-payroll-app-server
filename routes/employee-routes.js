
const express = require('express')

const { handle404 } = require('../lib/custom-errors')

const { requireToken } = require('../config/auth')

const Employee = require('../models/employee')

const router = express.Router()


// INDEX
// GET /employees
router.get('/employees', requireToken, (req, res, next) => {
    Employee.find()
        .then(employee => {
            return employee.map(employee => employee)
        })
        .then(employee => {
            res.status(200).json({ employee: employee })
        })
        .catch(next)

})


// SHOW
// GET /employees/:id
router.get('/employees/:id', requireToken, (req, res, next) => {
    Employee.findById(req.params.id)
        .then(handle404)
        .then(employee => {
            res.status(200).json({ employee: employee})
        })
        .catch(next)
})


// CREATE
// POST /employees
router.post('/employees', requireToken, (req, res, next) =>{
    Employee.create(req.body.employee)
        .then(employee => {
            res.status(201).json({ employee: employee})
        })
        .catch(next)
})

// UPDATE
// PATCH /employees/:id
router.patch('/employees/:id', requireToken, (req, res, next) => {
    Employee.findById(req.params.id)
        .then(handle404)
        .then(employee => {
            return employee.updateOne(req.body.employee)
        })
        .then((employee) => console.log(employee))
        .then(() => res.sendStatus(204))
        .catch(next)
})


// DELETE
// DELETE /employee/:id

router.delete('/employees/:id', requireToken, (req, res, next) => {
    Employee.findById(req.params.id)
    .then(handle404)
    .then(employee => {
        return employee.deleteOne()
    })
    .then(() => res.sendStatus(204))
    .catch(next)
})


module.exports = router