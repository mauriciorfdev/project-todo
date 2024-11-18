const express = require('express')
const router = express.Router({ mergeParams: true })

router.get('/', (req, res)=>{res.send('birds home page')})

router.get('/:id', (req, res)=>{
    res.send(req.params);
})

module.exports = router