const app = require('./app');
const db = require ('./config/db');
const HotelRoutes = require('./routes/hotel.routes');
const HabitacionRoutes = require('./routes/habitacion.routes');

// Rutas
app.use('/api/hoteles', HotelRoutes);
app.use('/api/habitaciones', HabitacionRoutes);

const PORT = process.env.PORT || 3000;

// Test en español
const server = async () => {
  try {
    await db.authenticate();
    console.log('Conexión a la base de datos establecida exitosamente.');
    app.listen(PORT, () => {
      console.log(`Servidor escuchando en el puerto ${PORT}`);
    }
    );
  } catch (error) {
    console.error('No se pudo conectar a la base de datos:', error);
  }
};

server();

