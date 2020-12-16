const fichaPsicologo = require('./fichaPsicologo.service');

module.exports = {

    async createFichaPsicologo(req, res) {
        try {
            const result = await fichaPsicologo.createFichaPsicologo(req.body);
            if (!result) {
                return res.json({
                    status: 'failed',
                    msg: "Error al crear una Ficha Psicologo.",
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

    async updateFichaPsicologo(req, res) {
        try {
            const result = await fichaPsicologo.updateFichaPsicologo(req.params.id, req.body);
            if (!result) {
                return res.json({
                    status: 'failed',
                    msg: "No se puede actualizar Ficha Psicologo",
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
    async deleteFichaPsicologo(req, res) {
        try {
            const result = await fichaPsicologo.deleteFichaPsicologo(req.params.id);
            if (!result) {
                return res.json({
                    status: 'failed',
                    msg: "No se puede borrar Ficha Psicologo",
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


    async getFichasPsicologo(req, res) {
        try {
            const result = await fichaPsicologo.getFichasPsicologo();
            if (!result) {
                return res.json({
                    status: 'failed',
                    msg: "Error al obtener las Fichas Psicologo",
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

    async getFichaPsicologo(req, res) {
        try {
            const result = await fichaPsicologo.getFichaPsicologo(req.params.id);
            if (!result) {
                return res.json({
                    status: 'failed',
                    msg: "No se puede retornar Ficha Psicologo",
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