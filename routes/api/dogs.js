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

//PUT
// update a single dog by id
router.put('/:id', async(req, res)=>{
    const id = req.params.id;
    try {
        const data = await DogModel.findByIdAndUpdate(id, req.body, {new:true})
        if(!data){
            res.status(404).send({msg:`no es puede actualizar id ${id}`})
        } else res.send(data)
    } catch (error) {
        res.send(500).send({msg:`error actualizando el id ${id}`})
    }
})

//DELETE
//delete a single dog
router.delete('/:id', async(req, res)=>{
    const {id} = req.params;
    try {
        const data = await DogModel.findByIdAndDelete(id)
        if(!data){
            res.status(404).send({msg:`no se puede eliminar id ${id}`})
        }else res.send(data)
    } catch (error) {
        res.status(500).send({msg: `error eliminando el id ${id}`})
    }

})

module.exports = router