import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Progresso({ usuarioId }) {
  const [progresso, setProgresso] = useState({ pontos: 0, desafiosConcluidos: [] });

  useEffect(() => {
    axios.get(`http://localhost:5000/api/usuario/${usuarioId}/progresso`)
      .then(res => setProgresso(res.data));
  }, [usuarioId]);

  return (
    <div>
      <h2>Progresso</h2>
      <p>Pontos: {progresso.pontos}</p>
      <p>Desafios concluídos: {progresso.desafiosConcluidos.length}</p>
    </div>
  );
}

export default Progresso;
