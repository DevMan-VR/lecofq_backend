const mongoose = require("mongoose");

const ProfesorSchema = new mongoose.Schema({
  idProfesor: {
    type: Number,
    unique: true,
  },
  rut: {
    type: String,
    required: false,
  },
  nombreCompleto: {
    type: String,
    required: false,
  },
  telefono: {
    type: Number,
    required: false,
  },
  correo: {
    type: String,
    require: false,
  },
  direccion: {
    type: String,
    required: false,
  },
   idtallerEncargado: {
     type: String,
     required: false,
 },

  foto: {
    type: String,
    required: false,
  },
});

const profesor = mongoose.model("Profesor", ProfesorSchema);
module.exports = profesor;
