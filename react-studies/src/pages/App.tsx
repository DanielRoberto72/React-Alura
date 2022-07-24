import React from 'react';
import Cronometro from '../components/Cronometro';
import Formulario from '../components/Formulario';
import Lista from '../components/Lista';
import style from './app.module.scss';
import { useState } from 'react';
import { iTarefa } from '../types/tarefa';

function App() {
  const [tarefas, setTarefas] = useState<iTarefa[] | [] >([]);
  return (
    <div className={style.AppStyle}>
      <Formulario setTarefas={setTarefas}/>
      <Lista tarefas={tarefas}/>
      <Cronometro />
    </div>
  );
}

export default App;
