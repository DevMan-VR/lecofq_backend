const Cita = require('./cita.model'); // cita model
const Hora = require('../horas/hora.model')

module.exports = {

    async createCita(data) {
        var cita = await Cita.create(data);
        await Hora.findOneAndUpdate({ _id: cita.idHora }, { idCita: cita._id }, { new: true });
        return cita;
    },

    async updateCita(id, data) {
        await Hora.findOneAndUpdate({ idCita: id }, { idCita: null }, { new: true });
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

//Hacer un update de hora (para definir idCita null) cuando se modifique la hora en una cita