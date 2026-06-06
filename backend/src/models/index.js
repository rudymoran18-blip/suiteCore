const Hotel = require('./hotel');
const Habitacion = require('./habitacion');

Hotel.hasMany(Habitacion, {
  foreignKey: 'hotel_id',
  sourceKey: 'id'
});

Habitacion.belongsTo(Hotel, {
  foreignKey: 'hotel_id',
  targetKey: 'id'
});

module.exports = {
  Hotel,
  Habitacion
};