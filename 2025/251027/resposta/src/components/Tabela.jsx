export default function Tabela(props) {

    console.log('props da tabela', props)

    return (
        <>
            <div>Cabeçalho</div>
            {props.children}
            <div>Rodapé</div>
        </>
    )
}