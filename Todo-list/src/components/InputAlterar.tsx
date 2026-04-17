import React, { useState } from "react";
export default function InputAlterar() {
    const [value, setValue] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
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
            <button className="cursor-pointer">Alterar</button>
        </>
    );
}
