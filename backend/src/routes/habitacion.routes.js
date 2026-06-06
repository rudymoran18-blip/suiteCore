const express = require('express');
const router = express.Router();
const { Habitaciones } = require('../models');
const { getHabitaciones,createHabitacion, getHabitacionById,updateHabitacion, deleteHabitacion } = require('../controller/habitacion.controller');

router.get('/', getHabitaciones);
router.get('/:id', getHabitacionById);
router.post('/', createHabitacion);
router.put('/:id', updateHabitacion);
router.delete('/:id', deleteHabitacion);
    
module.exports = router;    