type BotaoProps = {
    onIncrementar: () => void;
}

function BotaoContador(props: BotaoProps) {

    return (
        <button onClick={props.onIncrementar}>Aumentar +1</button>
    )
}

export default BotaoContador