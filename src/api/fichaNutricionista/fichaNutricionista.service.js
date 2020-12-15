const { } = require('./fichaNutricionista.controller');
const fichaNutricionista = require('./fichaNutricionista.model'); // Hora model

module.exports = {

    async createFichaNutricionista(data) {
        return await fichaNutricionista.create(data);
    },

    async updateFichaNutricionista(id, data) {
        return await fichaNutricionista.findOneAndUpdate(
            { _id: id },
            data,
            { new: true });
    },

    async deleteFichaNutricionista(id) {
        return await fichaNutricionista.deleteOne({ _id: id });
    },

    async getFichasNutricionista() {
        return await fichaNutricionista.find({});
    },

    async getFichaNutricionista(id) {
        return await fichaNutricionista.findOne({ _id: id });
    },

}