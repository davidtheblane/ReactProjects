type DisplayProps = {
    valor: number
}

function Display(props: DisplayProps) {
    return (
        <p>{props.valor}</p>
    )
}

export default Display