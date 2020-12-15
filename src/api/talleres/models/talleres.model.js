const mongoose = require("mongoose");

const talleresSchema = new mongoose.Schema({
  idTaller: {
    type: Number,
    unique: true,
  },
  nombre: {
    type: String,
    required: false,
  },
  descripcion: {
    type: String,
    required: false,
  },
  direccion: {
    type: String,
    required: false,
  },
  horario: {
    type: String,
    require: false,
  },
  cupos: {
    type: Number,
    required: false,
  },
   idProfesor: {
   type: String,
    required: false,
 },

  idComentario: {
    type: String,
    required: false,
  },
  Implementacion: {
    type: String,
    required: false,
  },
  OtrosDetalles: {
    type: String,
    required: false,
  },

  image: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'imagenTaller',

  }
 
});

const talleres = mongoose.model("Talleres", talleresSchema);
module.exports = talleres;
