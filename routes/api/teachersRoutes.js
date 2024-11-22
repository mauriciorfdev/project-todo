const express = require('express')
const { TeachersModel } = require('../../models/TeachersModel')
const router = express.Router()

//api/dogs/testTeachers
router.get('/', async(req, res)=>{
    const allTeachers = await TeachersModel.find();
    return res.status(200).json(allTeachers)
})

module.exports = router
