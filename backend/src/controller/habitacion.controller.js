const  {Habitacion, Hotel}  = require('../models');

const getHabitaciones = async (req, res) => {
    try {
        const habitaciones = await Habitacion.findAll({
            include: {
                model: Hotel,
                attributes: ['nombre']
            }
        });
        if (habitaciones.length === 0) {
            return res.status(200).json({
                message: 'No hay habitaciones registradas',
                habitaciones: []
            });
        }
        res.status(200).json({
            message: 'Habitaciones obtenidas exitosamente',
            habitaciones
        });
    }
    catch (error) {
        console.error('Error al obtener las habitaciones:', error);
        res.status(500).json({
            error: 'Error al obtener las habitaciones'
        });
    }
};


const getHabitacionById = async (req, res) => {
    const { id } = req.params;
    try {
        const habitacion = await Habitacion.findByPk(id, {
            include: {
                model: Hotel,
                attributes: ['nombre']
            }
        });
        if (!habitacion) {
            return res.status(404).json({
                message: 'Habitación no encontrada'
            });
        }
        res.status(200).json({
            message: 'Habitación obtenida exitosamente',
            habitacion
        });
    }
    catch (error) {
        console.error('Error al obtener la habitación:', error);
        res.status(500).json({
            error: 'Error al obtener la habitación'
        });
    }
};

 //  ValidationErrorItem SequelizeValidationError
const createHabitacion = async (req, res) => {
    const { numero, tipo, precioNoche, capacidad, estado, hotelId } = req.body;
    try {
        const newHabitacion = await Habitacion.create({
            numero,
            tipo,
            precioNoche,
            capacidad,
            estado,
            hotelId
        });
        if(!numero || !tipo || !precioNoche || !capacidad || !estado || !hotelId){
            return res.status(400).json({
                message: 'Todos los campos son obligatorios'
            });
        }
        res.status(201).json({
            message: 'Habitación creada exitosamente',
            habitacion: newHabitacion
        });
    }
    catch (error) {
        console.error('Error al crear la habitación:', error);
        res.status(500).json({
            error: 'Error al crear la habitación'
        });
    }
};

const updateHabitacion = async (req, res) => {
    const { id } = req.params;
    const { numero, tipo, precioNoche, capacidad, estado, hotelId } = req.body;
    try {
        const habitacion = await Habitacion.findByPk(id);
        if (!habitacion) {
            return res.status(404).json({
                message: 'Habitación no encontrada'
            });
        }
        await habitacion.update({
            numero,
            tipo,
            precioNoche,
            capacidad,
            estado,
            hotelId
        });
        res.status(200).json({
            message: 'Habitación actualizada exitosamente',
            habitacion
        });
    }
    catch (error) {
        console.error('Error al actualizar la habitación:', error);
        res.status(500).json({
            error: 'Error al actualizar la habitación'
        });
    }
};

const deleteHabitacion = async (req, res) => {
    const { id } = req.params;
    try {
        const habitacion = await Habitacion.findByPk(id);
        if (!habitacion) {
            return res.status(404).json({
                message: 'Habitación no encontrada'
            });
        }
        await habitacion.destroy();
        res.status(200).json({
            message: 'Habitación eliminada exitosamente'
        });
    }
    catch (error) {
        console.error('Error al eliminar la habitación:', error);
        res.status(500).json({
            error: 'Error al eliminar la habitación'
        });
    }
};

module.exports = {
    getHabitaciones,
    getHabitacionById,
    createHabitacion,
    updateHabitacion,
    deleteHabitacion
};