import "./App.css";
import Header from "./components/Header.tsx";
import Lista from "./components/Lista.tsx";

function App() {
    return (
        <>
            <div className="w-100 m-auto border-amber-600 border-2">
                <Header />
                <Lista />
            </div>
        </>
    );
}

export default App;
