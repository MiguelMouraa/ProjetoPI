const mongoose = require('mongoose');

const UsuarioSchema = new mongoose.Schema({
  nome: String,
  email: String,
  progresso: {
    pontos: { type: Number, default: 0 },
    desafiosConcluidos: [String]
  }
});

module.exports = mongoose.model('Usuario', UsuarioSchema);
