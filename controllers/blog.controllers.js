const ctrl = {};
const Publicacion = require('../models/Publicacion');

//PUBLICACIONES 
ctrl.crearPublicacion = async (req, res) => {

 

    try {
        const publicacion = await Publicacion.create(req.body)
        await publicacion.save()

        return res.json({
            msg: 'Publicación guardada con éxito!',
            publicacion
        })
    } catch (error) {
        console.log(error.message);
        return res.status(500).json({
            msg: "Error al crear nueva Publicación!"
        })
    }

};

//para obtener todas
ctrl.obtenerPublicaciones = async (req, res) => {
    try {
        const publicaciones = await Publicacion.findAll();
        return res.json(publicaciones)
    } catch (error) {
        console.log(error.message);
        return res.status(500).json({
            msg: "Error al obtener publicaciones!"
        })
    }
};

//para obtener una sola
ctrl.obtenerPublicacion = async (req, res) => {
    try {
        const { id } = req.params;
        const publicacion = await Publicacion.findByPk(id);
        return res.json(publicacion)
    } catch (error) {
        console.log(error.message)
        return res.status(500).json({
            msg: "Error al obtener Publicación!"
        })
    }

};


ctrl.actualizarPublicacion = async (req, res) => {
    const { id } = req.params;
    
    try {
        const publicacion = await Publicacion.findByPk(id);
        publicacion.set(req.body)
        await publicacion.save();
        return res.json({
            msg: 'Publicación actualizada con éxito!'
        })  
    } catch (error) {
        console.log(error.message)
        return res.status(500).json({
            msg: "Error al actualizar Publicación!"
        })
    }
};

// Controlador para eliminar una publicación
ctrl.eliminarPublicacion = async (req, res) => {
    const { id } = req.params;
    
    try {
        const publicacion = await Publicacion.destroy(id);
        console.log(publicacion instanceof Publicacion)
        await publicacion.destroy();
        await publicacion.destroy({force:true})
        return res.json({
            msg: 'Publicación BORRADA con éxito!'
        })  
    } catch (error) {
        console.log(error.message)
        return res.status(500).json({
            msg: "Error al BORRAR LA Publicación!"
        })
    }
};


module.exports = ctrl;