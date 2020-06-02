const express = require('express');

require('dotenv').config();

// Creo la aplicación de Express
const app = express();

// GESTIÓN DE RUTAS
// GET http://localhost:3200/
app.get('/', (req, res) => {
    res.end('Accede a la ruta raiz GUAY!');
});

// GET http://localhost:3200/contacto
app.get('/contacto', (req, res) => {
    res.end('Accede a la ruta contacto');
});

// POST http://localhost:3200/clientes/create
app.post('/clientes/create', (req, res) => {
    res.json({
        success: 'Se ha creado el cliente'
    });
});

// Pongo la aplicación a escuchar
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server escuchando en el puerto ${PORT}!`);
});