const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const personaSchema = new Schema({
    id: {type: String},
    nombre: {type: String},
    apellido: {type:String},
    edad: {type:Number}
}, {versionKey:false});

const Personas = mongoose.model('persona', personaSchema);

module.exports = Personas;