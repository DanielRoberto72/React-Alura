import React from "react";
import style from'./lista.module.scss'

function Lista(){
    const Tarefa = [{
        tarefa: 'React',Tempo: '02:00:00'
    },{
        tarefa: 'javaScript',Tempo: '02:00:00' 
    }]



    return(
        <aside className={style.listaTarefas}>
        <h2>Estudos do dia</h2>
        <ul>
            {Tarefa.map((item, index)=>(
                <li key={index} className={style.item}>
                    <h3>
                        {item.tarefa}
                    </h3>
                    <span>
                        {item.Tempo}
                    </span>
                </li>
            ))}
        </ul>
        </aside>
    )
}

export default Lista