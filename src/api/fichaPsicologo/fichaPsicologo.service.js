const { } = require('./fichaPsicologo.controller');
const fichaPsicologo = require('./fichaPsicologo.model'); // Hora model

module.exports = {

    async createFichaPsicologo(data) {
        return await fichaPsicologo.create(data);
    },

    async updateFichaPsicologo(id, data) {
        return await fichaPsicologo.findOneAndUpdate(
            { _id: id },
            data,
            { new: true });
    },

    async deleteFichaPsicologo(id) {
        return await fichaPsicologo.deleteOne({ _id: id });
    },

    async getFichasPsicologo() {
        return await fichaPsicologo.find({});
    },

    async getFichaPsicologo(id) {
        return await fichaPsicologo.findOne({ _id: id });
    },

}