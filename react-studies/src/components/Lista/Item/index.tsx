import { iTarefa } from '../../../types/tarefa';
import style from '../lista.module.scss';

interface Props extends iTarefa{
  selecionaTarefa: (tarefaSelecionada: iTarefa) => void
}

export default function Item({ tarefa, tempo, selecionado, completado, id, selecionaTarefa }: Props) {
  return (
    <li className={`${style.item} ${selecionado ? style.itemSelecionado : ''}`} onClick={()=> selecionaTarefa({tarefa, tempo, selecionado, completado, id})}>
      <h3>{tarefa}</h3>
      <span>{tempo}</span>
    </li>
  )
}