import { useEffect } from "react";

const Parte = ({ parte, setParte, eliminarParte }) => {
  const { mes, fecha, lugar, entrada, salida, trabajo, id } = parte;
  const handleEliminar = () => {
    const respuesta = confirm('Deseas Eliminar este Parte?');

    if(respuesta) {
      eliminarParte(id)
    }
  }
  return (
    <div className="mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-xl">
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Mes en Curso: {""}
        <span className="font-normal normal-case"> {mes} </span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Fecha: {""}
        <span className="font-normal normal-case"> {fecha} </span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Lugar de Trabajo: {""}
        <span className="font-normal normal-case"> {lugar} </span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Hora de Entrada: {""}
        <span className="font-normal normal-case"> {entrada} </span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Hora de Salida: {""}
        <span className="font-normal normal-case"> {salida} </span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Tarabajos Realizados: {""}
        <span className="font-normal normal-case"> {trabajo} </span>
      </p>
      <div className="flex justify-between mt-10">
        <button 
          type="button"
          className="py-2 px-10 bg-indigo-600 hover:bg-indigo-800 text-white font-bold uppercase rounded-lg"
          onClick={() => setParte(parte)}
        >Editar</button>
        <button 
          type="button"
          className="py-2 px-10 bg-red-600 hover:bg-red-800 text-white font-bold uppercase rounded-lg"
          onClick={handleEliminar}
        >Eliminar</button>
      </div>
    </div>
  );
};

export default Parte;
