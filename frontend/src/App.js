import React from 'react';
import DesafioList from './components/DesafioList';
import Progresso from './components/Progresso';

function App() {
  const usuarioId = '6828ca20d20bd7589828c4e5';

  return (
    <div className="App">
      <h1>App de Desafios de Saúde</h1>
      <DesafioList usuarioId={usuarioId} />
      <Progresso usuarioId={usuarioId} />
    </div>
  );
}

export default App;
