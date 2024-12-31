const { response } = require('express');
const  {TeachersModel} = require ('../models/TeachersModel')


//desc      Get teachers
const getTeachers = async(req, res)=>{
    const allTeachers = await TeachersModel.find();
    return res.status(200).json(allTeachers)
}


//desc      get a single teacher
const getSingleTeacher = async(req, res) => {
    const id = req.params.id;
    try {
        const teacher = await TeachersModel.findById(id)
        if(!teacher){
            return res.status(404).json({msg: 'Teacher Not Found'})
        }
        return res.status(200).json(teacher)
    } catch (error) {
        return res.status(500).json({msg: 'Internal server error', error: error.message})
    }
}


//desc      post teacher
const setTeacher = async(req, res) => {
    const newTeacher = new TeachersModel( {name: req.body.name, age: req.body.age, title: req.body.title} );
    const insertedTeacher = await newTeacher.save()
    return res.status(201).json(insertedTeacher)
}


//desc      update teacher
const updateTeacher = async(req, res) => {
    const id = req.params.id;
    try {
        const data = await TeachersModel.findByIdAndUpdate(id, req.body, {new: true});
        if(!data){
            return res.status(404).json({msg: `Teacher with id ${id} not found for update`})
        }else return res.send(data)
    } catch (error) {
        return res.status(500).json({msg: `Internal server error`, error: error.message})
    }
}


//desc delete teacher 
const deleteTeacher = async(req, res) => {
    const {id} = req.params;
    try {
        const data = await TeachersModel.findByIdAndDelete(id);
        if(!data){
            return res.status(404).json({msg: `Teacher with id ${id} not found for delete`})
        }else return res.send(data)
    } catch (error) {
        return res.status(500).json({msg: 'Internal server error', error: error.message})
    }
}

module.exports = {
    getTeachers,
    getSingleTeacher,
    setTeacher,
    updateTeacher,
    deleteTeacher,
}