const mongoose = require('mongoose');
var Schema = mongoose.Schema;
const fichaPsicologoSchema = new mongoose.Schema({
    idFichaPsicologo: {
        type: Number,
        unique: true
    },
    rut: {
        type: String,
        // required: true
    },
    ocupacion: {
        type: String,
        // required: true
    },
    escolaridad: {
        type: String,
        // required: true
    },
    telefono: {
        type: String,
        // required: true
    },
    ocupacionActual: {
        type: String,
        // required: true
    },
    razonesConsulta: {
        type: String,
        // required: true
    },
    causasConsulta: {
        type: String,
        // required: true
    },
    fechaAtencion: {
        type: String,
        // required: true
    },
    lugarNacimiento: {
        type: String,
        // required: true
    },
    estado_civil: {
        type: String,
        // required: true
    },
    calidadAlumno: {
        type: String,
        // required: true
    },
    psicologoAnteriorRazon: {
        type: String,
        // required: true
    },
    antecedentePrenatal: {
        type: String,
        // required: true
    },
    tipoParto: {
        type: String,
        // required: true
    },
    antecedentePerinatal: {
        type: String,
        // required: true
    },
    antecedenteNacido: {
        type: String,
        // required: true
    },
    nacimineto: {
        type: String,
        // required: true
    },
    antecedenteDesarrollo: {
        type: String,
        // required: true
    },
    dificultadesAprender: {
        type: String,
        // required: false
    },
    enfermedades: {
        type: String,
        // required: true
    },
    datosEscolar: {
        type: String,
        // required: true
    },
    conductaEscolar: {
        type: String,
        // required: true
    },
    adaptacionEscolar: {
        type: String,
        // required: true
    },
    remuneracion: {
        type: String,
        // required: true
    },
    tipoTrabajo: {
        type: String,
        // required: true
    },
    calidadTrabajo: {
        type: String,
        // required: true
    },
    relacionCompañeros: {
        type: String,
        // required: true
    },
    calidadLaboral: {
        type: String,
        // required: true
    },
    relacionSuperior: {
        type: String,
        // required: true
    },
    estabilidadLaboral: {
        type: String,
        // required: true
    },
    perspectivaDesarrollo: {
        type: String,
        // required: true
    },
    tipoPersona: {
        type: String,
        // required: true
    },
    balanceSocial: {
        type: String,
        // required: true
    },
    estadoAnimo: {
        type: String,
        // required: true
    },
    situacionUltimoAño: {
        type: String,
        // required: true
    },
    tiempoPareja: {
        type: String,
        // required: true
    },
    nombrePareja: {
        type: String,
        // required: true
    },
    edadPareja: {
        type: String,
        // required: true
    },
    nivelEducacionalPareja: {
        type: String,
        // required: true
    },
    ocupacionActualPareja: {
        type: String,
        // required: true
    },
    relacionPareja: {
        type: String,
        // required: true
    },
    metasVida: {
        type: String,
        // required: true
    },
    sintomas: {
        type: String,
        // required: true
    },
    miedosDesproporcionados: {
        type: String,
        // required: true
    },
    otrosMiedos: {
        type: String,
        // required: true
    },
    andar: {
        type: Boolean,
        // required: false
    },
    hablar: {
        type: Boolean,
        // required: false
    },
    leerYEscribir: {
        type: Boolean,
        // required: false
    },
    controlarEsfinter: {
        type: Boolean,
        // required: false
    },
    conductual: {
        type: Boolean,
        // required: false
    },
    otros: {
        type: Boolean,
        // required: false
    },
    muySatisfecho: {
        type: Boolean,
        // required: false
    },
    satisfecho: {
        type: Boolean,
        // required: false
    },
    relativamenteSatisfecho: {
        type: Boolean,
        // required: false
    },
    insatisfecho: {
        type: Boolean,
        // required: false
    },
    muyInsatisfecho: {
        type: Boolean,
        // required: false
    },
    sociable: {
        type: Boolean,
        // required: false
    },
    relativamenteSociable: {
        type: Boolean,
        // required: false
    },
    pocoSociable: {
        type: Boolean,
        // required: false
    },
    plenamenteSatisfecho: {
        type: Boolean,
        // required: false
    },
    satisfecho2: {
        type: Boolean,
        // required: false
    },
    relativamenteSatisfecho2: {
        type: Boolean,
        // required: false
    },
    insatisfecho2: {
        type: Boolean,
        // required: false
    },
    muyInsatisfecho2: {
        type: Boolean,
        // required: false
    },
    muyEstable: {
        type: Boolean,
        // required: false
    },
    estable: {
        type: Boolean,
        // required: false
    },
    relativamenteEstable: {
        type: Boolean,
        // required: false
    },
    variaEnFuncionDeLasExperencias: {
        type: Boolean,
        // required: false
    },
    cesantia: {
        type: Boolean,
        // required: false
    },
    separacionMatrimonial: {
        type: Boolean,
        // required: false
    },
    despidoLaboral: {
        type: Boolean,
        // required: false
    },
    muerteDeUnFamiliarCercano: {
        type: Boolean,
        // required: false
    },
    enfermedad: {
        type: Boolean,
        // required: false
    },
    fuertesProblemasEconomicos: {
        type: Boolean,
        // required: false
    },
    accidente: {
        type: Boolean,
        // required: false
    },
    fracasoAcademico: {
        type: Boolean,
        // required: false
    },
    enfermedadDeUnHijo: {
        type: Boolean,
        // required: false
    },
    cambioDeResidencia: {
        type: Boolean,
        // required: false
    },
    si: {
        type: Boolean,
        // required: false
    },
    no: {
        type: Boolean,
        // required: false
    },
    ustedEstaMasSatisfechoQueSuPareja: {
        type: Boolean,
        // required: false
    },
    ambosEstanIgualDeSatisfechos: {
        type: Boolean,
        // required: false
    },
    suParejaEstaMasSatisfechaQueUsted: {
        type: Boolean,
        // required: false
    },
    problemasConcentracion: {
        type: Boolean,
        // required: false
    },
    angustia: {
        type: Boolean,
        // required: false
    },
    problemasMemoria: {
        type: Boolean,
        // required: false
    },
    insomnio: {
        type: Boolean,
        // required: false
    },
    excesoSueño: {
        type: Boolean,
        // required: false
    },
    pesadillas: {
        type: Boolean,
        // required: false
    },
    sonambulismo: {
        type: Boolean,
        // required: false
    },
    aburrimiento: {
        type: Boolean,
        // required: false
    },
    irritabilidad: {
        type: Boolean,
        // required: false
    },
    mareos: {
        type: Boolean,
        // required: false
    },
    cefaleas: {
        type: Boolean,
        // required: false
    },
    vomitos: {
        type: Boolean,
        // required: false
    },
    desmayos: {
        type: Boolean,
        // required: false
    },
    diarreas: {
        type: Boolean,
        // required: false
    },
    constipacion: {
        type: Boolean,
        // required: false
    },
    arritmia: {
        type: Boolean,
        // required: false
    },
    transpiracionManos: {
        type: Boolean,
        // required: false
    },
    onicofagia: {
        type: Boolean,
        // required: false
    },
    temblorManos: {
        type: Boolean,
        // required: false
    },
    bruxismo: {
        type: Boolean,
        // required: false
    },
    comeExceso: {
        type: Boolean,
        // required: false
    },
    inapetencia: {
        type: Boolean,
        // required: false
    },
    sequedadBucal: {
        type: Boolean,
        // required: false
    },
    ideasObsesivas: {
        type: Boolean,
        // required: false
    },
    ideasSuicidio: {
        type: Boolean,
        // required: false
    },
    sentimientosCulpa: {
        type: Boolean,
        // required: false
    },
    tartamudez: {
        type: Boolean,
        // required: false
    },
    alteracionesMenstruales: {
        type: Boolean,
        // required: false
    },
    impotenciaSecual: {
        type: Boolean,
        // required: false
    },
    frigidez: {
        type: Boolean,
        // required: false
    },
    eyaculacionprecoz: {
        type: Boolean,
        // required: false
    },
    dolorVaginal: {
        type: Boolean,
        // required: false
    },
    pocoDeseo: {
        type: Boolean,
        // required: false
    },
    tics: {
        type: Boolean,
        // required: false
    },
    fatiga: {
        type: Boolean,
        // required: false
    },
    llanto: {
        type: Boolean,
        // required: false
    },
    desanimo: {
        type: Boolean,
        // required: false
    },
    pena: {
        type: Boolean,
        // required: false
    },
    ingestion: {
        type: Boolean,
        // required: false
    },
    consumos: {
        type: Boolean,
        // required: false
    },
    hipocondria: {
        type: Boolean,
        // required: false
    },
    alturas: {
        type: Boolean,
        // required: false
    },
    espacios: {
        type: Boolean,
        // required: false
    },
    viajar: {
        type: Boolean,
        // required: false
    },
    sangre: {
        type: Boolean,
        // required: false
    },
    espaciosAbiertos: {
        type: Boolean,
        // required: false
    },
    

});

const fichaPsicologo = mongoose.model("FichaPsicologo", fichaPsicologoSchema);
module.exports = fichaPsicologo;
