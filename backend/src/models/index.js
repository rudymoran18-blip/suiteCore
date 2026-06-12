const Hotel = require('./hotel');
const Habitacion = require('./habitacion');

Hotel.hasMany(Habitacion, {
  foreignKey: 'hotelId',
  sourceKey: 'id'
});

Habitacion.belongsTo(Hotel, {
  foreignKey: 'hotelId',
  targetKey: 'id'
});

module.exports = {
  Hotel,
  Habitacion
};