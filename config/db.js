const mongoose = require('mongoose')
const dotenv = require('dotenv')

dotenv.config({ path: "config.env" })

const connString = process.env.DB_STRING

async function connectToDBAtlas (){
    try {
        await mongoose.connect(connString, {})
        console.log('Connected to MongoDB Atlas!')
    } catch (error) {
        console.log(error)
    }
}


module.exports = connectToDBAtlas