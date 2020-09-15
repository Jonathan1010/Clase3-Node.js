const express = require('express'),
rutas = express.Router(),
equipo=require('./controladorTerreno'),
edificios = require('./controladorEdificios');

rutas.use('/equipo'  , equipo);
rutas.use('/edificios',edificios)

module.exports=rutas;