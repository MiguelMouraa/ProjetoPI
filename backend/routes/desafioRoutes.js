const express = require('express');
const router = express.Router();
const controller = require('../controllers/desafioController');

router.get('/desafios', controller.getDesafios);
router.post('/desafios/concluir', controller.concluirDesafio);
router.get('/usuario/:id/progresso', controller.getProgresso);

module.exports = router;
