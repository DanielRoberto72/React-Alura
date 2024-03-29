import React from 'react';
import { iTarefa } from '../../types/tarefa';
import Item from './Item';
import style from './lista.module.scss';

interface Props{
  tarefas: iTarefa[],
  selecionaTarefa: (tarefaSelecionada: iTarefa) => void
}

function Lista({tarefas, selecionaTarefa}: Props) {

  return (
    <aside className={style.listaTarefas}>
      <h2> Estudos do dia </h2>
      <ul>
        {tarefas.map((item) => (
          <Item
            selecionaTarefa={selecionaTarefa}
            key={item.id}
            {...item}
          />
        ))}
      </ul>
    </aside>
  )
}

export default Lista;