const express = require('express')
const { TeachersModel } = require('../../models/TeachersModel')
const router = express.Router()
const { getTeachers,
    getSingleTeacher,
 } = require('../../controllers/teachersController')

//api/teachers

//desc      get all teachers
router.get('/', getTeachers)


//desc      get single teacher
router.get('/:id', getSingleTeacher)


//desc      set teacher
router.post('/', async(req, res) => {
    const newTeacher = new TeachersModel( {name: req.body.name, age: req.body.age, title: req.body.title} );
    const insertedTeacher = await newTeacher.save();
    return res.status(201).json(insertedTeacher)
})


//desc      update teacher
router.put('/:id', async(req, res) => {
    const id = req.params.id;
    try {
        const data = await TeachersModel.findByIdAndUpdate(id, req.body, {new: true})
        if(!data){
            res.status(404).send({msg: `no se puede actualizar id ${id}`})
        }else res.send(data)    
    } catch (error) {
        res.send(500).send({msg: `error actualizando el id ${id}`})
    }
    
})

//desc      delelte teacher
router.delete('/:id', async(req, res) => {
    const {id} = req.params;
    try {
        const data = await TeachersModel.findByIdAndDelete(id)
        if(!data){
            return res.send(404).send({msg:`no se puede eliminar id: ${id}`})
        }else return res.send(data)
    } catch (error) {
        res.status(500).send({msg: `error al eliminar el id ${id}`})
    }
})

module.exports = router
