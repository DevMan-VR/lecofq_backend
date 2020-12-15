const mongoose = require('mongoose');
var Schema = mongoose.Schema;
const fichaNutricionistaSchema = new mongoose.Schema({
    idFichanutricionista: {
        type: Number,
        unique: true
    },
    rut: {
        type: String,
        // required: true
    },
    actividadLaboral: {
        type: String,
        // required: true
    },
    actividadFisica: {
        type: String,
        // required: true
    },
    horasSemanales: {
        type: String,
        // required: true
    },
    consumoAlcohol: {
        type: String,
        // required: true
    },
    cantidadSemanalAlcohol: {
        type: String,
        // required: true
    },
    habitoTabaquico: {
        type: String,
        // required: true
    },
    cantidadSemanalTabaco: {
        type: String,
        // required: true
    },
    patologia: {
        type: Boolean,
        // required: true
    },
    diabetes: {
        type: Boolean,
        // required: true
    },
    obesidad: {
        type: Boolean,
        // required: true
    },
    dislipidemia: {
        type: Boolean,
        // required: true
    },
    cancer: {
        type: Boolean,
        // required: true
    },
    hta: {
        type: Boolean,
        // required: true
    },
    otrasPatologias: {
        type: String,
        // required: false
    },
    peso: {
        type: String,
        // required: true
    },
    talla: {
        type: String,
        // required: true
    },
    imc: {
        type: String,
        // required: true
    },
    cCintura: {
        type: String,
        // required: true
    },
    cCadera: {
        type: String,
        // required: true
    },
    icc: {
        type: String,
        // required: true
    },
    pitri: {
        type: String,
        // required: true
    },
    pibi: {
        type: String,
        // required: true
    },
    pisb: {
        type: String,
        // required: true
    },
    pisc: {
        type: String,
        // required: true
    },
    grasa: {
        type: String,
        // required: true
    },
    gmb: {
        type: String,
        // required: true
    },
    pesoIdeal: {
        type: String,
        // required: true
    },
    tiemposComida: {
        type: String,
    },
    alimentosPorciones: {
        type: String,
    },
});

const fichaNutricionista = mongoose.model("FichaNutricionista", fichaNutricionistaSchema);
module.exports = fichaNutricionista;