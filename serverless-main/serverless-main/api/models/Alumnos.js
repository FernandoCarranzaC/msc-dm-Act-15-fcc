const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Alumnos = mongoose.model('Alumno', new Schema({
    noControl: String,
    nomAlumno: String
}))

module.exports = Alumnos