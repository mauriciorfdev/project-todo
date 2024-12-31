const express = require('express')
const { TeachersModel } = require('../../models/TeachersModel')
const router = express.Router()
const { getTeachers,
    getSingleTeacher,
    setTeacher,
    updateTeacher,
    deleteTeacher,
 } = require('../../controllers/teachersController')

//api/teachers

//get all teachers
router.get('/', getTeachers)

//get a single teacher
router.get('/:id', getSingleTeacher)

//create a new teacher
router.post('/', setTeacher)

//update a teacher by id
router.put('/:id', updateTeacher)

//desc      delete teacher
router.delete('/:id', deleteTeacher)

module.exports = router
