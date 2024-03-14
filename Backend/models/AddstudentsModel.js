const mongoose = require('mongoose')

const Schema = mongoose.Schema

const addstudentsSchema = new Schema({
    FirstName: {
        type: String,
        required: true
    },

    LastName: {
        type: String,
        required: true
    },

    StudentNumber: {
        type: String,
        required: true
    },

    Email: {
        type: String,
        required: true
    },

    ContactNumber: {
        type: Number,
        required : true
    },

    Address: {
        type: String,
        required : true
    },
    
    Password: {
        type: String,
        required : true
    },

    ConfirmPassword: {
        type: String,
        required : true
    },

}, {timestamps: true})

module.exports = mongoose.model('AddstudentsModel', addstudentsSchema)