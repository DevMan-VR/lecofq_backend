const mongoose = require("mongoose");

const SobreCuporSchema = new mongoose.Schema({
  idTaller: {
    type: Number,
    unique: true,
  },
  nombreCompleto: {
    type: String,
    required: true,
  },
  telefono: {
    type: Number,
    required: true,
  },
  correo: {
    type: String,
    require: true,
  },
});

const sobreCupo = mongoose.model("sobreCupo", SobreCuporSchema);
module.exports = sobreCupo;