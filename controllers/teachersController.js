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

module.exports = {
    getTeachers,
    getSingleTeacher,
}