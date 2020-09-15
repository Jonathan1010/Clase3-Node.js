var mongoose=require("mongoose");
Schemas=mongoose.Schema;
var atributos = new Schemas({
    idTerreno:{type:Number,trim:true},
    dimension:{type:Number,trim:true},
    barrio:{type:String,trim:true},
    calleprincipal:{type:String,trim:true}

});
var terreno=mongoose.model('terreno',atributos);
module.exports=terreno;