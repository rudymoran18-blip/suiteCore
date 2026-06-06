CREATE DATABASE suite_core;
USE suite_core;

CREATE TABLE hoteles (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL UNIQUE,
    direccion VARCHAR(250) NOT NULL,
    telefono VARCHAR(20) NOT NULL,
    correo VARCHAR(100) NOT NULL UNIQUE,
    estado ENUM('Activo', 'Inactivo') NOT NULL DEFAULT 'Activo',

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deleted_at TIMESTAMP NULL DEFAULT NULL
) ENGINE=InnoDB;


CREATE TABLE habitaciones (
    id INT AUTO_INCREMENT PRIMARY KEY,
    hotel_id INT NOT NULL ,
    numero VARCHAR(10) NOT NULL  ,
    tipo ENUM('Individual', 'Doble', 'Suite', 'Familiar') NOT NULL,
    precio_noche DECIMAL(10,2) NOT NULL CHECK (precio_noche > 0),
    capacidad INT NOT NULL  CHECK (capacidad > 0),
    estado ENUM('Disponible', 'Ocupada', 'Mantenimiento', 'Inactiva') 
        NOT NULL DEFAULT 'Disponible',

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deleted_at TIMESTAMP NULL DEFAULT NULL,

    CONSTRAINT fk_hoteles_habitaciones
        FOREIGN KEY (hotel_id)
        REFERENCES hoteles(id)
        ON UPDATE CASCADE
        ON DELETE RESTRICT,
        
   CONSTRAINT uq_habitacion_por_hotel UNIQUE (hotel_id, numero)


) ENGINE=InnoDB;