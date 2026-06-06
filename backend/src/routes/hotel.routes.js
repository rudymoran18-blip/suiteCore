const express = require('express');
const router = express.Router();
const { getHoteles, getHotelById, createHotel, updateHotel, deleteHotel  } = require('../controller/hotel.controller');

router.get('/', getHoteles);
router.get('/:id', getHotelById);
router.post('/', createHotel);
router.put('/:id', updateHotel);
router.delete('/:id', deleteHotel);
module.exports = router;