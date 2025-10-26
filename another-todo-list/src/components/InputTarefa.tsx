
type InputTarefaProps = {
  valorInput: string,
  onChangeInput: (e: React.ChangeEvent<HTMLInputElement>) => void,
  onClickButton: () => void,
}

function InputTarefa(props: InputTarefaProps){
    return (
        <>
        <input 
            type="text" 
            value={props.valorInput}
            onChange={props.onChangeInput}
        />

        <button 
            onClick={props.onClickButton}>
                Adicionar
        </button>
        </>
    )

}

export default InputTarefa