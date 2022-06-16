import React from "react";
import style from'./lista.module.scss';
import Item from "./Item"

function Lista(){
    const Tarefa = [{
        tarefa: 'React',tempo: '02:00:00'
    },{
        tarefa: 'javaScript',tempo: '02:00:00' 
    }]



    return(
        <aside className={style.listaTarefas}>
        <h2>Estudos do dia</h2>
        <ul>
            {Tarefa.map((item, index)=>(
                <Item
                key={index}
                {...item}
                />
            ))}
        </ul>
        </aside>
    )
}

export default Lista