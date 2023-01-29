const mongoose = require('mongoose')
const Schema = mongoose.Schema

const dependatSchema = require('./dependant')


const employeeSchema = new Schema({
    id: {
        type: String,
        required: true,
        unique: true,
    },
    firstName: {
        type: String,
        required: true,
    },
    middleName: {
        type: String,
        required: false,
    },
    lastName: {
        type: String,
        required: true,
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
        type: String,
        required: true,
        unique: true,
    },
    contacts: {
        cell: {
            type: String,
            required: false,
            default: '',
        },
        home_phone: {
            type: String,
            required: false,
            default: '',
        },
        email: {
            type: String,
            required: false,
            default: '',
        }
    },
    address: {
            type: {
                type: String,
                required: false,
                default: '',
            },
            line1: {
                type: String,
                required: false,
                default: '',
            },
            line2: {
                type: String,
                required: false,
                default: '',
            },
            city: {
                type: String,
                required: false,
                default: '',
            },
            state: {
                type: String,
                required: false,
                default: '',
            },
            zip: {
                type: String,
                required: false,
                default: '',
            }
        },
    status: {
        type: String,
        enum: ['Current-employee', 'Candidate', 'Trainee', 'Former-employee', ''],
        required: false,
        default: ''
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
        default: 0,
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