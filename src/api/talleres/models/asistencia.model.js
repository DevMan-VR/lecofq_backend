const mongoose = require("mongoose");

const asistenciaSchema = new mongoose.Schema({
    idAsistencia: {
        type: Number,
        unique: true,
    },
    idProfesor: {
        type: String,
        required: false,
    },
    idTaller: {
        type: Number,
        required: false,
    },
    idAlumno: {
        type: String,
        required: false,
    },
    fecha: {
        type: String,
        required: false,
    },
    fechaIngreso: {
        type: Boolean,
        required: false,
    },
    asistencia: {
        type: Boolean,
        required: false,
    },

});

const asistencia = mongoose.model("Asistencia", asistenciaSchema);
module.exports = asistencia;
