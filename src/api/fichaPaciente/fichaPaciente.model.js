const mongoose = require('mongoose');
const fichaPacienteSchema = new mongoose.Schema({
    id_ficha_paciente: {
        type: Number,
        unique: true
    },
    rut: {
        type: String,
        //required: true
    },
    domicilio: {
        type: String,
        //required: true
    },
    comuna: {
        type: String,
        //required: true
    },
    estado_civil: {
        type: String,
    },
    prevision: {
        type: String,
        //required: true
    },
    motivo_consulta: {
        type: String,
    },
    telefono: {
        type: String,
       // required: true
    },
    fecha_ingreso: {
        type: String,
        //required: true
    }




});

const fichaPaciente = mongoose.model("fichaPaciente", fichaPacienteSchema);
module.exports = fichaPaciente;
