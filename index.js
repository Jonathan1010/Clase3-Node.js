const express=require("express");
const body_paser=require('body-parser');
var http=require("http");
var server=http.createServer();

const app = express();
var connection = require('./conexion');


const rutas = require('./rutas');
app.use(body_paser.json());
app.use(body_paser.urlencoded({extended:true}));
app.use('/' , rutas);



function mensaje(peticion,respuesta){
    respuesta.writeHead(200,{'content-type':'text/plain'})
    respuesta.write("Hola Mundo")
    respuesta.end();
}
app.on('request',mensaje);
app.listen(3100,function(){
    console.log("El servidor se inicio correctamente")
});