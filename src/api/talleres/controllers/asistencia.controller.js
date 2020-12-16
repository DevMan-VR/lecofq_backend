const Asistencia = require('../models/asistencia.model')
const Alumno = require('../models/alumno.model')


module.exports = {

    async getAllAsistencia(req, res) {
        try {
            const result = await Asistencia.find();
            if (!result) {
                return res.json({
                    status: "failed",
                    msg: "Error al obtener los asistencias",
                    success: 0,
                });
            }
            return res.json({
                status: "success",
                data: result,
            });
        } catch (e) {
            console.error(e)
        }
    },

    async createAsistencia(req, res) {
        try {
            const result = await Asistencia.create(req.body);
            if (!result) {
                return res.json({
                    status: "failed",
                    msg: "Error al crear un asistencia.",
                    code: 0,
                });
            }
            return res.json({
                status: "success",
                data: result,
                code: 1,
            });
        } catch (e) {
            console.error(e);
        }
    },

    async updateAsistencia(req, res, next) {
        try {
            const result = await Asistencia.findOneAndUpdate(req.params._id, req.body);
            if (!result) {
                return res.json({
                    status: "failed",
                    msg: "No se puede actualizar el datos del asistencia.",
                    success: 0,
                });
            }
            return res.json({
                status: "success",
                data: result,
            });
        } catch (e) {
            console.error(e);
        }
    },

    async deleteAsistencia(req, res) {
        try {
            const result = await Asistencia.findOneAndDelete(req.params._id);
            if (!result) {
                return res.json({
                    status: "failed",
                    msg: "No se puede borrar al asistencia.",
                    success: 0,
                });
            }
            return res.json({
                status: "success",
                data: result,
            });
        } catch (e) {
            console.error(e)
        }
    },

    async getAsistencia(req, res) {
        try {
            const result = await Asistencia.findById(req.params._id);
            if (!result) {
                return res.json({
                    status: "failed",
                    msg: "Error al obtener al asistencia.",
                    success: 0,
                });
            }
            return res.json({
                status: "success",
                data: result,
            });
        } catch (e) {
            console.error(e)
        }
    },

    // Get Alumno x Asistencia

    async getAllAlumno(req, res) {
        try {
            const datosAlumnos = await Alumno.find({ "idTaller": req.params.idTaller});

            console.log(datosAlumnos)
            if (!datosAlumnos) {
                return res.json({
                    status: "failed",
                    msg: "Error al obtener alumnos.",
                    success: 0,
                });
            }else{
                const datosAsistencia = await Asistencia.find({ "idTaller": req.params.idTaller});
                datosAlumnos.infoAsistencia = datosAsistencia;

                
                return res.json({
                    status: "success",
                    data: datosAlumnos,
                });

            }
           
        } catch (e) {
            console.error(e)
        }
    },

   

};
