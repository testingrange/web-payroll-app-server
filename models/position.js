const mongoose = require('mongoose')

const Employee = require('./employee')

const Schema = mongoose.Schema



const positionSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    deparment: {
        type: String,
        required: true,
    },
    baseSalary: {
        type: Number,
        required: false,
    },
    type: String,
    required: false,
    enum: ['Part-time', 'Full-time'],
    workers: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Employee'
    }],
    lastUpdatedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
},
{
    timestamps: true
})

const Position = mongoose.model('Position', positionSchema)

module.exports = Position
