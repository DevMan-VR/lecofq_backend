const fichaNutricionista = require('./fichaNutricionista.service');

module.exports = {

    async createFichaNutricionista(req, res) {
        try {
            const result = await fichaNutricionista.createFichaNutricionista(req.body);
            if (!result) {
                return res.json({
                    status: 'failed',
                    msg: "Error al crear una Ficha Nutricionista.",
                    code: 0,
                    state: false
                });
            }
            return res.json({
                status: 'success',
                data: result,
                code: 1,
                state: true
            });
        } catch (e) {
            console.error(e);
            return res.json({
                status: 'failed',
                msg: "Error al crear la ficha de Paciente.",
                code: 0,
                state: false
            });
        }
    },

    async updateFichaNutricionista(req, res) {
        try {
            const result = await fichaNutricionista.updateFichaNutricionista(req.params.id, req.body);
            if (!result) {
                return res.json({
                    status: 'failed',
                    msg: "No se puede actualizar Ficha Nutricionista",
                    success: 0
                });
            }
            return res.json({
                status: 'success',
                data: result
            });
        } catch (e) {
            console.error(e);
        }

    },
    async deleteFichaNutricionista(req, res) {
        try {
            const result = await fichaNutricionista.deleteFichaNutricionista(req.params.id);
            if (!result) {
                return res.json({
                    status: 'failed',
                    msg: "No se puede borrar Ficha Nutricionista",
                    success: 0
                });
            }
            return res.json({
                status: 'success',
                data: result
            });
        } catch (e) {
            console.error(e);
        }
    },


    async getFichasNutricionista(req, res) {
        try {
            const result = await fichaNutricionista.getFichasNutricionista();
            if (!result) {
                return res.json({
                    status: 'failed',
                    msg: "Error al obtener las Fichas Nutricionista",
                    success: 0
                });
            }
            return res.json({
                status: 'success',
                data: result
            });
        } catch (e) {
            console.error(e);
        }

    },

    async getFichaNutricionista(req, res) {
        try {
            const result = await fichaNutricionista.getFichaNutricionista(req.params.id);
            if (!result) {
                return res.json({
                    status: 'failed',
                    msg: "No se puede retornar Ficha Nutricionista",
                    success: 0
                });
            }
            return res.json({
                status: 'success',
                data: result
            });
        } catch (e) {
            console.error(e);
        }
    },

}
