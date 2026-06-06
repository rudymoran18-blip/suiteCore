# SuiteCore

Sistema web de gestión hotelera desarrollado con Angular, Node.js, Express y MySQL.

SuiteCore permite administrar hoteles y sus habitaciones mediante operaciones CRUD completas, implementando una relación **uno a muchos (1:N)** donde un hotel puede registrar múltiples habitaciones, utilizando una arquitectura frontend/backend desacoplada y una base de datos relacional.

---

# Demo en línea


---

# Capturas del sistema

## Dashboard

Pendintes

## Hoteles

Pendintes

## Formulario de Hoteles

Pendintes

## Habitaciones

Pendintes

## Formulario de Habitaciones

Pendintes
---

# Tecnologías utilizadas

## Frontend

* Angular
* TypeScript
* Bootstrap 5
* RxJS
* Angular Router
* SweetAlert2

## Backend

* Node.js
* Express.js
* Sequelize ORM
* MySQL

---

# Funcionalidades

## Gestión de Hoteles

* CRUD de hoteles
* Listado de hoteles
* Actualización de información
* Inhabilitación de hoteles

## Gestión de Habitaciones

* CRUD de habitaciones
* Asociación de habitaciones a un hotel
* Actualización de información
* Inhabilitación de habitaciones

## Dashboard

* Total de hoteles registrados
* Total de hoteles activos
* Total de hoteles inactivos
* Vista rápida de los últimos hoteles agregados

## Base de datos

* Relación 1:N entre hoteles y habitaciones
* Integridad referencial mediante claves foráneas
* Arquitectura organizada por módulos

---

# Estructura del proyecto

```text
SuiteCore/
│
├── backend/
│   ├── src/
│   │   ├── config/
│   │   ├── controllers/
│   │   ├── models/
│   │   ├── routes/
│   │   └── server.js
│
├── frontend/
│   ├── src/
│   │   ├── app/
│   │   │   ├── components/
│   │   │   ├── models/
│   │   │   ├── pages/
│   │   │   └── services/
```

---

# Instalación

## Clonar repositorio

```bash
git clone
```

---

## Backend

```bash
cd backend
npm install
npm run dev
```

Servidor:

```text
http://localhost:3000
```

---

## Frontend

```bash
cd frontend
npm install
ng serve
```

Aplicación:

```text
http://localhost:4200
```

---

# Estado del proyecto

* CRUD funcional de hoteles
* CRUD funcional de habitaciones
* Relación 1:N implementada
* Arquitectura frontend/backend separada
* Base de datos relacional con MySQL
* Dashboard con estadísticas generales
* Preparado para futuras mejoras como paginación, filtros y autenticación

---

# Próximas mejoras

* Paginación backend
* Búsqueda y filtros
* Autenticación y autorización
* Gestión de usuarios y roles
* Despliegue completo en la nube

---

# Desarrollador

**Rudy Isaías Morán Gómez**

Desarrollador web enfocado en Angular, Node.js, Express, Sequelize y MySQL.
