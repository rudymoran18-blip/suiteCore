const {Hotel} = require('../models');

const getHoteles = async (req, res) => {
    try {
        const hoteles = await Hotel.findAll();

        if (hoteles.length === 0) {
            return res.status(200).json({
                message: 'No hay hoteles registrados',
                hoteles: []
            });
        }

        res.status(200).json({
            message: 'Hoteles obtenidos exitosamente',
            hoteles
        });

    } catch (error) {
        console.error('Error al obtener los hoteles:', error);
        res.status(500).json({
            error: 'Error al obtener los hoteles'
        });
    }
};

const getHotelById = async (req, res) => {
    const { id } = req.params;
    try {
        const hotel = await Hotel.findByPk(id);
        if (!hotel) {
            return res.status(404).json({
                message: 'Hotel no encontrado'
            });
        }
        res.status(200).json({
            message: 'Hotel obtenido exitosamente',
            hotel
        });
    }
    catch (error) {
        console.error('Error al obtener el hotel:', error);
        res.status(500).json({
            error: 'Error al obtener el hotel'
        });
    }
};

const createHotel = async (req, res) => {
    const { nombre, direccion, telefono, correo, estado } = req.body;
    try {
        const newHotel = await Hotel.create({
            nombre,
            direccion,
            telefono,
            correo,
            estado
        });
        if(!nombre || !direccion || !correo || !telefono || !estado){
            return res.status(400).json({
                message: 'El nombre, direccion, correo, telefono y estado son campos obligatorios'
            });
        }
        res.status(201).json({
            message: 'Hotel creado exitosamente',
            hotel: newHotel
        });
    }
    catch (error) {
        console.error('Error al crear el hotel:', error);
        res.status(500).json({
            error: 'Error al crear el hotel'
        });
    }
};

const updateHotel = async (req, res) => {
    const { id } = req.params;
    const { nombre, direccion, telefono, correo, estado } = req.body;
    try {
        const hotel = await Hotel.findByPk(id);
        if (!hotel) {
            return res.status(404).json({
                message: 'Hotel no encontrado'
            });
        }
        if(!nombre || !direccion || !correo || !telefono || !estado){
            return res.status(400).json({
                message: 'El nombre, direccion, correo, telefono y estado son campos obligatorios'
            });
        }
        hotel.nombre = nombre || hotel.nombre;
        hotel.direccion = direccion || hotel.direccion;
        hotel.telefono = telefono || hotel.telefono;
        hotel.correo = correo || hotel.correo;
        hotel.estado = estado || hotel.estado;
        await hotel.save();
        res.status(200).json({
            message: 'Hotel actualizado exitosamente',
            hotel
        });
    }
    catch (error) {
        console.error('Error al actualizar el hotel:', error);
        res.status(500).json({
            error: 'Error al actualizar el hotel'
        });
    }
};


const deleteHotel = async (req, res) => {
    const { id } = req.params;
    try {
        const hotel = await Hotel.findByPk(id);
        if (!hotel) {
            return res.status(404).json({
                message: 'Hotel no encontrado'
            });
        }
        await hotel.destroy();
        res.status(200).json({
            message: 'Hotel eliminado exitosamente'
        });
    }
    catch (error) {
        console.error('Error al eliminar el hotel:', error);
        res.status(500).json({
            error: 'Error al eliminar el hotel'
        });
    }
};



module.exports = {
    getHoteles,
    getHotelById,
    createHotel,
    updateHotel,
    deleteHotel
};