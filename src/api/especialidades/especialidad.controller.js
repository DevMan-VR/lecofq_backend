const especialidadService = require('./especialidad.service');

module.exports = {

    async createEspecialidad(req, res, next) {
        try {
            const result = await especialidadService.createEspecialidad(req.body);
            if (!result) {
                return res.json({
                    status: 'failed',
                    msg: "Error al crear una Especialidad.",
                    code: 0
                });
            }
            return res.json({
                status: 'success',
                data: result,
                code: 1
            });
        } catch (exception) {
            next(exception);
        }
    },

    async updateEspecialidad(req, res, next) {
        try {
            const result = await especialidadService.updateEspecialidad(req.params.id, req.body);
            if (!result) {
                return res.json({
                    status: 'failed',
                    msg: "No se puede actualizar la especialidad.",
                    success: 0
                });
            }
            return res.json({
                status: 'success',
                data: result
            });
        } catch (exception) {
            next(exception);
        }

    },

    async deleteEspecialidad(req, res, next) {
        try {
            const result = await especialidadService.deleteEspecialidad(req.params.id);
            if (!result) {
                return res.json({
                    status: 'failed',
                    msg: "No se puede borrar la especialidad.",
                    success: 0
                });
            }
            return res.json({
                status: 'success',
                data: result
            });
        } catch (exception) {
            next(exception);
        }
    },

    async getEspecialidades(req, res, next) {
        try {
            const result = await especialidadService.getEspecialidades();
            if (!result) {
                return res.json({
                    status: 'failed',
                    msg: "Error al obtener las especialidades.",
                    success: 0
                });
            }
            return res.json({
                status: 'success',
                data: result
            });
        } catch (exception) {
            next(exception);
        }

    },

    async getEspecialidad(req, res, next) {
        try {
            const result = await especialidadService.getEspecialidad(req.params.id);
            if (!result) {
                return res.json({
                    status: 'failed',
                    msg: "No se puede retornar la especialidad.",
                    success: 0
                });
            }
            return res.json({
                status: 'success',
                data: result
            });
        } catch (exception) {
            next(exception);
        }
    },




}
