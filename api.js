const express = require("express");
const router = express.Router();
const teacher = require("./model")

router.get('/api', (req, res) => {
    res.send({method:"GET"})
})

router.post('/api', (req, res) => {
    teacher.create(req.body)
    .then(tech =>{
        res.send(tech);
    })
})

router.put('/api', (req, res) => {
    res.send({method:"PUT"})
})

router.delete('/api', (req, res) => {
    res.send({method:"DELETE"})
})

module.exports = router;