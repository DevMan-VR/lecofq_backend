// server.js
const express = require('express');
const app = express();

const cors = require("cors");

const dotenv = require('dotenv');
dotenv.config();
const PORT = process.env.PORT
//const cors = require('cors');

//api
app.use(cors());
app.get('/', (req, res) => {
    res.send("API LECOFQ UP!");
});

const morgan = require('morgan');
app.use(morgan('dev'));
// Our DB Configuration
require('./src/database');

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// Routes
const areaRouter = require('./src/api/areas/area.router');
const centroRouter = require('./src/api/centros/centro.router');
const especialidadRouter = require('./src/api/especialidades/especialidad.router');
const citaRouter = require('./src/api/citas/cita.router');
const horaRouter = require('./src/api/horas/hora.router');
const rutinaRouter = require('./src/api/rutina/rutina.router')
const especialistaRouter = require('./src/api/especialistas/especialista.router');
const horarioRouter = require('./src/api/horario/horario.router');
const ejercicioRouter = require('./src/api/ejercicio/ejercicio.router');
const pacienteRouter = require('./src/api/paciente/paciente.router');
const fichaPacienteRouter = require('./src/api/fichaPaciente/fichaPaciente.router');
const userRouter = require("./src/api/users/pacientes/user.router");
const funcionarioRouter = require("./src/api/users/funcionarios/Funcionario.router");
const fichaNutricionistaRouter = require('./src/api/fichaNutricionista/fichaNutricionista.router');
const fichaPsicologoRouter = require('./src/api/fichaPsicologo/fichaPsicologo.router');

app.use('/areas', areaRouter);
app.use('/centros', centroRouter);
app.use('/especialidades', especialidadRouter);
app.use('/citas',citaRouter);
app.use('/horas',horaRouter);
app.use('/horario',horarioRouter);

app.use('/especialistas',especialistaRouter);
app.use('/rutina',rutinaRouter)
app.use('/ejercicio',ejercicioRouter);
app.use('/paciente',pacienteRouter);
app.use('/fichaPaciente', fichaPacienteRouter);
app.use('/fichaNutricionista', fichaNutricionistaRouter);
app.use('/fichaPsicologo', fichaPsicologoRouter);

app.use("/users", userRouter);
app.use("/funcionarios", funcionarioRouter);

router = express.Router();
// will redirect all the non-api routes to react frontend
router.use(function(req, res) {
    res.sendFile(path.join(__dirname, '../client','build','index.html'));
});

app.listen(PORT, function () {
  console.log(`Server Listening on ${PORT}`);
});
