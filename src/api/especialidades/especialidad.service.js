const Especialidad = require('./especialidad.model'); // post model
const Especialista = require('../especialistas/especialista.model')
const Hora = require('../horas/hora.model')

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

    async getHorasEspecialidad(id){
        const arrayEspecialistas = await Especialista.find({idEspecialidad: id})
        let arrayHoras = []

        for(const especialista of arrayEspecialistas){
            let horas = await Hora.find({idEspecialista: especialista._id})
            arrayHoras.push(horas)
        }

        let horas = arrayHoras.flat(1)

        return await horas
    }

}


/***}
 * 
 * 
 * 
 * model.find({
    '_id': { $in: [
        mongoose.Types.ObjectId('4ed3ede8844f0f351100000c'),
        mongoose.Types.ObjectId('4ed3f117a844e0471100000d'), 
        mongoose.Types.ObjectId('4ed3f18132f50c491100000e')
    ]}
}, function(err, docs){
     console.log(docs);
});
 */