const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv').config()

const cors = require('cors')

const router = require('./routes/api/members')
const dogs = require('./routes/api/dogs')
const teachersRouter = require('./routes/api/teachersRoutes')
const connectToDBAtlas = require('./config/db')

const app = express();

async function connectToDB(){
    try {
        await mongoose.connect('mongodb://localhost:27017/test')
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}

connectToDB()
//connectToDBAtlas()


//Body Parser Middleware
app.use(express.json())
//CORS
app.use(cors())


//Members API Routes
app.use('/api/members', router)
app.use('/api/dogs', dogs)
app.use('/api/teachers', teachersRouter)
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => { console.log(`Server listen on port ${PORT}...`) })