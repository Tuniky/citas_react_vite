import { useState, useEffect } from "react"
import Error from "./Error";

const Formulario = ({partes, setPartes, parte, setParte}) => {
  const [mes, setMes] = useState('');
  const [fecha, setFecha] = useState('');
  const [lugar, setLugar] = useState('');
  const [entrada, setEntrada] = useState('');
  const [salida, setSalida] = useState('');
  const [trabajo, setTrabajo] = useState('');

  const [error, setError] = useState(false)

  useEffect(() => {
    if(Object.keys(parte).length > 0 ){
      setMes(parte.mes)
      setFecha(parte.fecha)
      setLugar(parte.lugar)
      setEntrada(parte.entrada)
      setSalida(parte.salida)
      setTrabajo(parte.trabajo)
    }
  }, [parte])

  const generarId = () => {
    const random = Math.random().toString(36).substring(2);
    const fecha = Date.now().toString(36);

    return fecha + random
  }
  
  const handleSubmit = (e) => {
    e.preventDefault()

    // Validación del Formulario

    if([mes, fecha, lugar, entrada, salida, trabajo].includes('')) {
      setError(true)
      return
    }
    setError(false)

    // Objeto de Parte
    const objetoParte = {
      mes, 
      fecha, 
      lugar, 
      entrada, 
      salida, 
      trabajo
    }

    if(parte.id) {
      // EDITANDO REGISTRO
      objetoParte.id = parte.id
      /* console.log(objetoPaciente)
      console.log(paciente) */
      const partesActualizados = partes.map(parteState => parteState.id === parte.id ? objetoParte : parteState)

      setPartes(partesActualizados)
      setParte({})
    } else {
      // NUEVO REGISTRO
      objetoParte.id = generarId()
      setPartes([...partes, objetoParte])
    }

    // Reiniciar Formulario
    setMes('')
    setFecha('')
    setLugar('')
    setEntrada('')
    setSalida('')
    setTrabajo('')
    
  }
  return (
    <div className="md:w-1/2 lg:w-2/5">
      <h2 className="font-black text-3xl text-center">Partes de Trabajo</h2>
      <p className="text-lg mt-5 text-center mb-10">
        Añadir Parte y {''}
        <span className="text-indigo-600 font-bold">Administrar</span>
      </p>
      <form
        onSubmit={handleSubmit} 
        className="bg-white shadow-md rounded-lg py-10 px-5 mb-10 mx-5"
      >
        { error && <Error><p>Todos los campos son obligatorios</p></Error> }
        <div>
          <label className="block text-gray-700 uppercase font-bold" htmlFor="mes">Mes en Curso:</label>
          <input
            type="text"
            id="mes"
            className="border-2 w-full p-2 mt-2 rounded-md mb-2"
            value={mes}
            onChange={ (e) => setMes(e.target.value) }
          />
        </div>
        <div>
          <label className="block text-gray-700 uppercase font-bold" htmlFor="fecha">Fecha:</label>
          <input
            type="date"
            id="fecha"
            className="border-2 w-full p-2 mt-2 rounded-md mb-2"
            value={fecha}
            onChange={ (e) => setFecha(e.target.value) }
          />
        </div>
        <div>
          <label className="block text-gray-700 uppercase font-bold" htmlFor="lugar">Lugar de Trabajo:</label>
          <input
            type="text"
            id="lugar"
            className="border-2 w-full p-2 mt-2 rounded-md mb-2 placeholder-gray-400"
            placeholder="Dónde se reliza el trabajo"
            value={lugar}
            onChange={ (e) => setLugar(e.target.value) }
          />
        </div>
        <div>
          <label className="block text-gray-700 uppercase font-bold" htmlFor="entrada">Hora de Entrada:</label>
          <input
            type="time"
            id="entrada"
            className="border-2 w-full p-2 mt-2 rounded-md mb-2"
            value={entrada}
            onChange={ (e) => setEntrada(e.target.value) }
          />
        </div>
        <div>
          <label className="block text-gray-700 uppercase font-bold" htmlFor="salida">Hora de Salida:</label>
          <input
            type="time"
            id="salida"
            className="border-2 w-full p-2 mt-2 rounded-md mb-2"
            value={salida}
            onChange={ (e) => setSalida(e.target.value) }
          />
        </div>
        <div>
          <label className="block text-gray-700 uppercase font-bold placeholder-gray-400" htmlFor="trabajos">Trabajos Realizados:</label>
          <textarea
            id="trabajos"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400"
            placeholder="Describe los trabajos Realizados"
            value={trabajo}
            onChange={ (e) => setTrabajo(e.target.value) } 
          />
        </div>
        <input
          type="submit" 
          value={parte.id ? 'Editar Parte' : 'Guardar Parte'}
          className="bg-red-600 w-full p-3 text-white uppercase text-bold mt-3 hover:bg-red-800 cursor-pointer transition-all" 
        />
      </form>
    </div>
  )
}

export default Formulario