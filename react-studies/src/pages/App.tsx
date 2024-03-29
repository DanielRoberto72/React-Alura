import React from 'react';
import Cronometro from '../components/Cronometro';
import Formulario from '../components/Formulario';
import Lista from '../components/Lista';
import style from './app.module.scss';
import { useState } from 'react';
import { iTarefa } from '../types/tarefa';

function App() {
  const [tarefas, setTarefas] = useState<iTarefa[] | [] >([]);
  const [selecionado, setSelecionado ] = useState<iTarefa>()

  function selecionaTarefa(tarefaSelecionada: iTarefa){
    setSelecionado(tarefaSelecionada)
    setTarefas(tarefasAnteriores=>tarefasAnteriores.map(tarefa=>({...tarefa, selecionado: tarefa.id === tarefaSelecionada.id ? true : false})))
  }
  return (
    <div className={style.AppStyle}>
      <Formulario setTarefas={setTarefas}/>
      <Lista tarefas={tarefas} selecionaTarefa={selecionaTarefa}/>
      <Cronometro />
    </div>
  );
}

export default App;
