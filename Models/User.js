const mongoose = require('mongoose'); 


const userSchema = new mongoose.Schema({
    name:{type:String, required:true}, 
    phone:{type:String, required:true}, 
    email:{type:String, required:true}, 
    cpf:{type:String, required:true},
    birthdate:{type:Date, required:true}
}, 
{timestamps:true}); 

module.exports = mongoose.model('User', userSchema);