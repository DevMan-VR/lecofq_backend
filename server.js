// server.js
const express = require('express');
const app = express();

const dotenv = require('dotenv');
dotenv.config();
const PORT = process.env.PORT
//const cors = require('cors');

//api
//app.use(cors());
//app.options('*', cors());

app.use(function(req, res, next) {
       res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
    // allow preflight
    if (req.method === 'OPTIONS') {
        res.send(200);
    } else {
        next();
    }
});

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
const fichaNutricionistaRouter = require('./src/api/fichaNutricionista/fichaNutricionista.router');
const fichaPsicologoRouter = require('./src/api/fichaPsicologo/fichaPsicologo.router');
const userRouter = require("./src/api/users/pacientes/user.router");
const funcionarioRouter = require("./src/api/users/funcionarios/Funcionario.router");
const tallerRouter = require('./src/api/talleres/routers/taller.router');
const alumnoRouter = require('./src/api/talleres/routers/alumno.router');
const profesorRouter = require('./src/api/talleres/routers/profesor.router');
const sobreCupoRouter = require('./src/api/talleres/routers/sobreCupo.router');
const imagenTallerRouter = require('./src/api/talleres/routers/imagenTaller.router');
const asistencia = require('./src/api/talleres/routers/asistencia.router');

app.use('/areas', areaRouter);
app.use('/centros', centroRouter);
app.use('/especialidades', especialidadRouter);
app.use('/citas',citaRouter);
app.use('/horas',horaRouter);
app.use('/horario',horarioRouter);

app.use('/taller',tallerRouter);
app.use('/alumno',alumnoRouter);
app.use('/profesor',profesorRouter);
app.use('/sobreCupo',sobreCupoRouter);
app.use('/imagenRouter',imagenTallerRouter);
app.use('/asistencia',asistencia);

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
