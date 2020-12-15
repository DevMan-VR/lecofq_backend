const mongoose = require("mongoose");

const ImagenSchema = new mongoose.Schema({
  idImagen: {
    type: Number,
    unique: true,
  },
  idTaller: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Talleres'
  },
  data: {
    type: String,
    required: false,
  } 
});

const imagenTaller = mongoose.model("imagenTaller", ImagenSchema);
module.exports = imagenTaller;