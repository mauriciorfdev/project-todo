const mongoose = require('mongoose')

const connString = process.env.MONGO_URI

async function connectToDBAtlas (){
    try {
        await mongoose.connect(connString, {})
        console.log('Connected to MongoDB Atlas!')
    } catch (error) {
        console.log(error)
    }
}


module.exports = connectToDBAtlas