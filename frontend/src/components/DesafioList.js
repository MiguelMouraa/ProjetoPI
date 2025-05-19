import React, { useEffect, useState } from 'react';
import axios from 'axios';

function DesafioList({ usuarioId }) {
  const [desafios, setDesafios] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/desafios')
      .then(res => setDesafios(res.data));
  }, []);

  const concluir = (id) => {
    axios.post('http://localhost:5000/api/desafios/concluir', {
      usuarioId,
      desafioId: id
    }).then(() => alert('Desafio concluído!'));
  };

  return (
    <div>
      <h2>Desafios do Dia</h2>
      {desafios.map(d => (
        <div key={d._id} style={{ margin: '10px', padding: '10px', border: '1px solid gray' }}>
          <p>{d.titulo}</p>
          <button onClick={() => concluir(d._id)}>Concluir</button>
        </div>
      ))}
    </div>
  );
}

export default DesafioList;
