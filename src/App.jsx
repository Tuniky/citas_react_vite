import { useState, useEffect } from "react";
import Header from "./components/Header";
import Formulario from "./components/Formulario";
import ListadoPartes from "./components/ListadoPartes";

function App() {
  const [partes, setPartes] = useState([]);
  const [parte, setParte] = useState({});

  useEffect(() => {
    const partesLocal = JSON.parse(localStorage.getItem('partes'));
    partesLocal?.length > 0 && setPartes(partesLocal)
  }, []);

  useEffect(() => {
    localStorage.setItem('partes', JSON.stringify(partes));
  }, [partes]);

  const eliminarParte = (id) => {
    const partesActualizados = partes.filter((parte) => parte.id !== id);
    setPartes(partesActualizados);
  };

  return (
    <div className="container mx-auto mt-10">
      <Header />
      <div className="mt-12 md:flex">
        <Formulario
          partes={partes}
          setPartes={setPartes}
          parte={parte}
          setParte={setParte}
        />
        <ListadoPartes
          partes={partes}
          setParte={setParte}
          eliminarParte={eliminarParte}
        />
      </div>
    </div>
  );
}

export default App;
