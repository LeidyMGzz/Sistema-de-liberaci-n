#!/bin/bash

# Instalar dependencias
npm install

# Configurar variables de entorno
export DATABASE_URL="mysql://usuario:contraseña@localhost:3306/mi_base_de_datos"

# Crear y migrar la base de datos
sequelize-cli db:migrate
