import { useState } from "react";
import plusIcon from "../assets/plus.png";
function Lista() {
    const [value, setValue] = useState("");
    const [list, setList] = useState([
        { name: "Learn JavaScript", id: 1, completed: false },
        { name: "Learn React", id: 2, completed: false },
        { name: "Learn Back-End", id: 3, completed: true },
    ]);
    // const novo = tarefas.map((tarefa, index) => {
    //     return (
    //         <li key={index} className="flex justify-between">
    //             <div className="esquerda">
    //                 <input type="checkbox" name="" id="" />
    //                 {tarefa}
    //             </div>
    //             <div className="direita">
    //                 <span>Alta</span>
    //             </div>
    //         </li>
    // );
    // });

    return (
        <>
            <div className="flex bg-blue-600 justify-between p-2 rounded-md">
                <h1 className="text-white">To-do List</h1>
                <input
                    type="text"
                    name=""
                    id=""
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    className="bg-blue-950 text-white"
                />
                <button
                    onClick={() => {
                        setList([
                            ...list,
                            {
                                name: value,
                                id: list.length + 1,
                                completed: false,
                            },
                        ]);
                        setValue("");
                    }}
                >
                    <img src={plusIcon} alt="" className="w-12.5" />
                </button>
            </div>
            <ul>
                {list.map((listItem) => (
                    <li className="flex justify-between" key={listItem.id}>
                        {listItem.completed ? (
                            <span className="line-through">
                                {listItem.name}
                            </span>
                        ) : (
                            <span>{listItem.name}</span>
                        )}

                        <button
                            onClick={() =>
                                setList([
                                    ...list.map((item) => ({
                                        ...item,
                                        completed:
                                            item.id === listItem.id
                                                ? true
                                                : item.completed,
                                    })),
                                ])
                            }
                        >
                            Concluir
                        </button>
                        <button
                            className="cursor-pointer hover:text-red-800"
                            onClick={() =>
                                setList(
                                    list.filter(
                                        (item) => item.id !== listItem.id,
                                    ),
                                )
                            }
                        >
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </>
    );
}

export default Lista;
