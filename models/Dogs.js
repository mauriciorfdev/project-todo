const mongoose = require('mongoose')

const DogSchema = new mongoose.Schema({name: String})

const DogModel = mongoose.model('Dog', DogSchema);

module.exports = { DogModel };