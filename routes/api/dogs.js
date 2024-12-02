const express = require('express')
const router = express.Router()
const {getDogs, 
    getSingleDog, 
    setDog, 
    updateDog, 
    deleteDog,
} = require('../../controllers/dogController')

//  api/dogs

// get all dogs
router.get('/', getDogs)

// create a new dog
router.post('/', setDog)

// update a single dog by id
router.put('/:id', updateDog)

//delete a single dog
router.delete('/:id', deleteDog)

//get a single dog
router.get('/:id', getSingleDog)

module.exports = router