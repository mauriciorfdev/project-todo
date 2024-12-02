const { DogModel } = require('../models/Dogs')

//desc      Get dogs
//route     GET api/dogs
const getDogs = async (req, res)=>{
    const allDogs = await DogModel.find();
    return res.status(200).json(allDogs)
}

//desc      Get a single dog
//route     GET api/dogs/:id
const getSingleDog = async(req, res)=>{
    const dog = await DogModel.findById(req.params.id);
    return res.status(200).json(dog)
}

//desc      Set dog
//route     POST api/dogs
const setDog = async(req, res)=>{
    const newDog = new DogModel( {name: req.body.name} )
    const insertedDog = await newDog.save();
    return res.status(201).json(insertedDog);
}


//desc      Update dog
//route     PUT api/dogs/:id
const updateDog = async(req, res)=>{
    const id = req.params.id;
    try {
        const data = await DogModel.findByIdAndUpdate(id, req.body, {new:true})
        if(!data){
            res.status(404).send({msg:`no es puede actualizar id ${id}`})
        } else res.send(data)
    } catch (error) {
        res.send(500).send({msg:`error actualizando el id ${id}`})
    }
}


//desc      Delete dog
//route     DELETE api/dogs/:id
const deleteDog = async(req, res)=>{
    const {id} = req.params;
    try {
        const data = await DogModel.findByIdAndDelete(id)
        if(!data){
            res.status(404).send({msg:`no se puede eliminar id ${id}`})
        }else res.send(data)
    } catch (error) {
        res.status(500).send({msg: `error eliminando el id ${id}`})
    }

}

module.exports = {
    getDogs, 
    getSingleDog,
    setDog,
    updateDog,
    deleteDog,
}