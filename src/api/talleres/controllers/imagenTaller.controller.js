const imagenTaller = require('../models/imagenTaller.model');
const ImagenTaller = require('../models/imagenTaller.model')
const Taller = require('../models/talleres.model')


module.exports = {
    async createImagenTaller(req, res) {
        try {
            const result = await ImagenTaller.create(req.body);
            if (!result) {
                return res.json({
                    status: "failed",
                    msg: "Error al crear un ImagenTaller.",
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

    async getImagenTaller(req, res) {
        try {
            const result = await ImagenTaller.findById(req.params._id);
            if (!result) {
                return res.json({
                    status: "failed",
                    msg: "Error al obtener al ImagenTaller.",
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

    async getAllImagenTaller(req, res) {
        try {
            const result = await ImagenTaller.find();
            if (!result) {
                return res.json({
                    status: "failed",
                    msg: "Error al obtener los ImagenTallers",
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


    async deleteImagenTaller(req, res) {
        try {
            const result = await ImagenTaller.findOneAndDelete(req.params._id);
            if (!result) {
                return res.json({
                    status: "failed",
                    msg: "No se puede borrar al ImagenTaller.",
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
    
  async updateTaller(req, res, next) {
    try {
      const result = await imagenTaller.findByIdAndUpdate(req.params._id, req.body);
      if (!result) {
        return res.json({
          status: "failed",
          msg: "No se puede actualizar el datos del taller.",
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

    async addImagenTaller(req, res) {

        //  Crear imagen para el taller
        const imagenNueva = new ImagenTaller(req.body)
        // Buscar el taller pa poner la imagen
        const tallerEncontrado = await Taller.findById(req.params)
        //  asignar imagen al taller
        imagenNueva.idtaller = tallerEncontrado
        // guardar imagen al taller
        await imagenNueva.save();
        //  asignar imagen al id  del taller
        tallerEncontrado.image = imagenNueva
        //  guaredar taller con su imagen
        await tallerEncontrado.save();

        res.send(imagenNueva);

    },

}
