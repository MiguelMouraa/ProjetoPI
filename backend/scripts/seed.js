const mongoose = require('mongoose');
const Desafio = require('../models/Desafio');

mongoose.connect('mongodb://localhost:27017/desafiosaude')
  .then(async () => {
    console.log('Conectado ao MongoDB');

    await Desafio.deleteMany({}); // Limpa os desafios antigos

    await Desafio.insertMany([
      {
        titulo: 'Beber 2L de água',
        descricao: 'Beba pelo menos 2 litros de água hoje.',
        concluido: false,
      },
      {
        titulo: 'Caminhar 30 minutos',
        descricao: 'Faça uma caminhada de pelo menos 30 minutos.',
        concluido: false,
      },
      {
        titulo: 'Meditar 10 minutos',
        descricao: 'Tire 10 minutos para meditar e relaxar.',
        concluido: false,
      }
    ]);

    console.log('Desafios inseridos!');
    mongoose.disconnect();
  })
  .catch(err => console.error(err));
