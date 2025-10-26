type SaudacaoProps = {
    nome: string
}

function Saudacao(props: SaudacaoProps) {
    return (
        <h2>Olá {props.nome}!</h2>
    )
}

export default Saudacao