const Desafio = require('../models/Desafio');
const Usuario = require('../models/Usuario');

exports.getDesafios = async (req, res) => {
  const desafios = await Desafio.find();
  res.json(desafios);
};

exports.concluirDesafio = async (req, res) => {
  const { usuarioId, desafioId } = req.body;

  const usuario = await Usuario.findById(usuarioId);
  if (!usuario) return res.status(404).json({ msg: "Usuário não encontrado" });

  usuario.progresso.pontos += 10;
  usuario.progresso.desafiosConcluidos.push(desafioId);
  await usuario.save();

  await Desafio.findByIdAndUpdate(desafioId, { concluido: true });
  res.json({ msg: "Desafio concluído!" });
};

exports.getProgresso = async (req, res) => {
  const usuario = await Usuario.findById(req.params.id);
  res.json(usuario.progresso);
};
