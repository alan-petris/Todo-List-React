function Lista() {
    const tarefas = ["Learn JavaScript", "Learn React", "Learn Back-End"];
    const novo = tarefas.map((tarefa, index) => {
        return (
            <li key={index} className="flex justify-between">
                <div className="esquerda">
                    <input type="checkbox" name="" id="" />
                    {tarefa}
                </div>
                <div className="direita">
                    <span>Alta</span>
                </div>
            </li>
        );
    });
    return (
        <>
            <ul className="">{novo}</ul>
        </>
    );
}

export default Lista;
