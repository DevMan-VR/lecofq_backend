const Especialidad = require('./especialidad.model'); // post model

module.exports = {

    async createEspecialidad(data) {
        return await Especialidad.create(data);
    },

    async updateEspecialidad(id, data) {
        return await Especialidad.findOneAndUpdate(
            { _id: id },
            data,
            { new: true });
    },

    async deleteEspecialidad(id) {
        return await Especialidad.deleteOne({ _id: id });
    },

    async getEspecialidades() {
        return await Especialidad.find({});
    },

    async getEspecialidad(id) {
        return await Especialidad.findOne({ _id: id });
    },

}