const Cita = require('./cita.model'); // cita model

module.exports = {

    async createCita(data) {
        return await Cita.create(data);
    },

    async updateCita(id, data) {
        return await Cita.findOneAndUpdate(
            { _id: id },
            data,
            { new: true });
    },

    async deleteCita(id) {
        return await Cita.deleteOne({ _id: id });
    },

    async getCitas() {
        return await Cita.find({});
    },

    async getCita(id) {
        return await Cita.findOne({ _id: id });
    },

}