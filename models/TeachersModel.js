const mongoose = require('mongoose')

const TeachersSchema = new mongoose.Schema({name: String, age: Number, title: String})

const TeachersModel = mongoose.model('teachers', TeachersSchema)

module.exports = {TeachersModel}