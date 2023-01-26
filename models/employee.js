const mongoose = require('mongoose')
const Schema = mongoose.Schema

const dependatSchema = require('./dependant')


const employeeSchema = new Schema({
    id: {
        type: Number,
        required: true,
    },
    firstName: {
        type: String,
        required: true,
    },
    middleName: {
        type: String,
        required: false,
    },
    dob: {
        type: Date,
        required: true,
    },
    driverLicense: {
        type: String,
        required: false,
    },
    ssn: {
        type: Number,
        required: true,
        min: 1000,
        max: 9999,
    },
    contacts: {
        cell: {
            type: String,
            required: false,
        },
        home_phone: {
            type: String,
            required: false,
        },
        email: {
            type: String,
            required: false,
        }
    },
    address: [
        {
            type: {
                type: String,
                required: false,
            },
            line1: {
                type: String,
                required: false,
            },
            line2: {
                type: String,
                required: false,
            },
            city: {
                type: String,
                required: false,
            },
            state: {
                type: String,
                required: false
            },
            zip: {
                type: Number,
                required: false,
                min: 10000,
                max: 99999
            }
        }
    ],
    status: {
        type: String,
        required: false,
        enum: ['Current-employee', 'Candidate', 'Trainee', 'Former-employee']
    },
    dependants: [ dependatSchema ],
    positon: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Position'
    },
    salary: {
        type: Number,
        required: false,
        max: 999999999,
    },
    lastUpdatedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
}, {
    timestamps: true
})


const Employee = mongoose.model('Employee', employeeSchema)

module.exports = Employee