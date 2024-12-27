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
            return res.status(404).json({msg: 'Not Found'})
        }
        return res.status(200).json(teacher)
    } catch (error) {
        res.status(500).send({msg: `error`})
    }
}

module.exports = {
    getTeachers,
    getSingleTeacher,
}