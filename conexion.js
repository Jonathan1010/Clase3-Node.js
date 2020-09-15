var mongoose=require('mongoose');
var connection=mongoose.connect('mongodb+srv://JonathanBury:1234@cluster0.lp6d6.mongodb.net/JonathanBury?retryWrites=true&w=majority');
mongoose.connection.on('open',(ref)=>{
console.log("Conectado a Mongo Cloud");
});
module.exports=connection;