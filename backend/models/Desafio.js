const mongoose = require('mongoose');

const DesafioSchema = new mongoose.Schema({
  titulo: String,
  descricao: String,
  concluido: { type: Boolean, default: false }
});

module.exports = mongoose.model('Desafio', DesafioSchema);
