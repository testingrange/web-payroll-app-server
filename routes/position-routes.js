const express = require('express')

const { handle404 } = require('../lib/custom-errors')

const Position = require('../models/position')


const router = express.Router()



// INDEX
// GET /positions
router.get('/positions', (req, res, next) => {
    Position.find()
        .then(positions => {
            return positions.map({ positions: positions})
        })
        .then(positions => {
            res.status(200).json({ positions: positions })
        })
        .catch(next)
})


// CREATE
// POST /positions
router.post('/positions', (req, res, next) => {
    Position.create(req.body.position)
        .then(position => {
            res.status(201).json({ position: position })
        })
        .catch(next)
})

// UPDATE
// PATCH /positions/:positionId
router.patch('/positions/:positionId', (req, res, next) => {
    Position.findById(req.params.positionId)
        .then(handle404)
        .then(position => {
            return position.updateOne(req.body.position)
        })
        .then(position => console.log(position))
        .then(() => res.sendStatus(204))
        .catch(next)
})


// DELETE
// DELETE /positons/:positionId

router.delete('/positions/:positionId', (req, res, next) => {
    Position.findById(req.params.positionId)
        .then(handle404)
        .then(position => {
            return position.deleteOne()
        })
        .then(() => res.sendStatus(204))
        .catch(next)
    })

module.exports = router