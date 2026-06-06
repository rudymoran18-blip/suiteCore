const {DataTypes} = require('sequelize');
const db = require('../config/db');

const Habitacion = db.define('Habitacion', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    hotelId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'hotel_id',
    },
    numero: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    tipo: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    precioNoche: {
        type: DataTypes.FLOAT,
        allowNull: false,
        field: 'precio_noche',
    },
    capacidad: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    estado: {
        type: DataTypes.ENUM('Disponible', 'Ocupada', 'Mantenimiento', 'Inactiva'),
        defaultValue: 'Disponible',
        allowNull: false,
    },
}, {
    tableName: 'habitaciones',
    timestamps: false,
    paranoid: true,
});
module.exports = Habitacion;