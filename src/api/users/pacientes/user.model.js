const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  id: {
    type: Number,
    unique: true,
  },
  Nombre: {
    type: String,
    required: true,
  },
  Correo: {
    type: String,
    required: true,
  },
  Telefono: {
    type: Number,
  },
  TelefonoApoderado: {
    type: Number,
    required: true,
  },
  RutSinDV: {
    type: String,
    required: true,
  },
  DigitoVerificador: {
    type: String,
  },
  Localidad: {
    type: String,
  },
  Direccion: {
    type: String,
  },
});

const User = mongoose.model("User", userSchema);
module.exports = User;
