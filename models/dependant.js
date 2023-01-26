const mongoose = require('mongoose')

const Schema = mongoose.Schema

const dependatSchema = new Schema({
    firstName: {
        type: String,
        required: true,
    },
    middleName: {
        type: String,
        required: false
    },
    lastName: {
        type: String,
        required: true,
    },
    dob: {
        type: Date,
        required: true,
    },
    relationship: {
        type: String,
        required: true,
    }
}, 
{
    timestamps: true
})


module.exports = dependatSchema
