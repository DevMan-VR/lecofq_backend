const mongoose = require("mongoose");

const AdministradorSchema = new mongoose.Schema({
  idAdministrador: {
    type: Number,
    unique: true,
  },
  rut: {
    type: String,
    required: true,
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
  permisos: {
    type: Number,
    required: true,
  },
});

const administrador = mongoose.model("Administrador", AdministradorSchema);
module.exports = administrador;
