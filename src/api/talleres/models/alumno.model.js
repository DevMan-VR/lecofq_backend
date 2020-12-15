const mongoose = require("mongoose");

const AlumnoSchema = new mongoose.Schema({
  idAlumno: {
    type: Number,
    unique: false,
  },
  rut: {
    type: String,
    required: false,
  },
  nombre: {
    type: String,
    required: false,
  },
  telefono: {
    type: Number,
    required: false,
  },
  correo: {
    type: String,
    required: false,
  },
  edad: {
    type: Number,
    require: false,
  },
  localidad: {
    type: String,
    required: false,
  },
  direccion: {
    type: String,
    required: false,
  },
  idTaller: {
    type: String,
    required: false,
  },
  aceptado:{
    type: Boolean,
    required: false,
  },
  sobrecupo:{
    type: Boolean,
    required: false,
  },
  
});

const alumno = mongoose.model("Alumno", AlumnoSchema);
module.exports = alumno;
