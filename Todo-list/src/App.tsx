import "./App.css";
import InputAlterar from "./components/InputAlterar.tsx";
import Lista from "./components/Lista.tsx";
import Notas from "./components/Notas.tsx";
import Usuario from "./components/Usuario.tsx";

function App() {
    return (
        <>
            <div className="w-100 m-auto border-amber-600 border-2">
                <Lista />
            </div>
            <Notas name="10" />
            <Usuario name="Alan" idade={30} profissao="Developer" />
            <InputAlterar />
        </>
    );
}

export default App;
