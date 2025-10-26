type ListaTarefasProps = {
    tarefas: string[]
}

function ListaTarefa(props: ListaTarefasProps) {

    return (
        <ul>
            {props.tarefas.map((tarefa, index) => (
                <li key={index}>{tarefa}</li>
            ))}
        </ul>

    )
}

export default ListaTarefa