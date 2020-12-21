const express = require('express')
const Alumnos = require('../models/Alumnos')

const router = express.Router()

router.get('/', (req, res) => {
    Alumnos.find()
        .exec()
        .then(x => res.status(200).send(x))
})

router.get('/:id', (req, res) => {
    Alumnos.findById(req.params.id)
        .exec()
        .then(x => res.status(200).send(x))
})

router.post('/', (req, res) => {
    Alumnos.create(req.body).then(x => res.status(201).send(x))
})

router.put('/:id', (req, res) => {
    Alumnos.findOneAndUpdate(req.params.id, req.body)
        .then(() => res.sendStatus(204))
})

router.delete('/:id', (req, res) => {
    Alumnos.findOneAndDelete(req.params.id).exec
        .then(() => res.sendStatus(204))
})

module.exports = router

