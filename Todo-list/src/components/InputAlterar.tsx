import React, { useState } from "react";
export default function InputAlterar() {
    const [value, setValue] = useState("");
    const [contador, setContador] = useState(0);
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    };
    const handleAlterar = () => {
        setContador(contador + 1);
    };
    return (
        <>
            <input
                type="text"
                name=""
                id=""
                value={value}
                onChange={handleChange}
                placeholder="Nome"
                className="bg-blue-950 text-white"
            />
            <p>Contador: {contador}</p>
            <button
                className="cursor-pointer bg-amber-400 rounded-md p-1"
                onClick={handleAlterar}
            >
                Add Contador
            </button>
        </>
    );
}
