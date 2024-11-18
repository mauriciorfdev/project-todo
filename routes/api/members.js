const express = require('express')
const router = express.Router()
const members = require('../../members')

//GET ALL MEMBERS
router.get('/', (req, res) => {res.json(members);})

//GET SINGLE MEMBER
router.get('/:id', (req, res) => {
    const id = parseInt(req.params.id)
    const found = members.some(m => m.id === id)
    if(found){
        res.json(members.filter(m => m.id === id))
    }
    else{
        res.status(400).json({msg: `no member with id ${req.params.id}`})
    }
})

//CREATE MEMBER
router.post('/', (req, res) => {
    const newMember = {
        id: req.body.id,
        name: req.body.name,
    }
    members.push(newMember)
    res.send(members)
})

router.get('/', (req, res) => {
    res.send('Hello world...');
});


router.get('/users', (req, res) => {
    res.json({msg: 'hello'});
})

module.exports = router