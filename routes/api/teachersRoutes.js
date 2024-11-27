const express = require('express')
const { TeachersModel } = require('../../models/TeachersModel')
const router = express.Router()

//api/teachers
router.get('/', async(req, res)=>{
    const allTeachers = await TeachersModel.find();
    return res.status(200).json(allTeachers)
})

//api/teachers
router.post('/create', async(req, res)=>{

})

module.exports = router
