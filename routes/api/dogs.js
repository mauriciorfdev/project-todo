const express = require('express')
const { DogModel } = require('../../models/Dogs')
const router = express.Router()

//  api/dogs

// GET - all dogs
router.get('/', async (req, res)=>{
    const allDogs = await DogModel.find();
    return res.status(200).json(allDogs)
})

// POST - create a new dog
router.post('/', async(req, res)=>{
    const newDog = new DogModel( {name: req.body.name} )
    const insertedDog = await newDog.save();
    return res.status(201).json(insertedDog);
})

//GET a single dog
router.get('/:id', async(req, res)=>{
    const dog = await DogModel.findById(req.params.id);
    return res.status(200).json(dog)
})

module.exports = router