export default function Usuario(props: {
    name: string;
    idade: number;
    profissao: string;
}) {
    return (
        <>
            <p>Usuário: {props.name}</p>
            <p>Idade: {props.idade}</p>
            <p>Profissão: {props.profissao}</p>
        </>
    );
}
