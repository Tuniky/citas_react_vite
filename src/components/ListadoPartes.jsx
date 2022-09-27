import Parte from "./Parte"

const ListadoPartes = ({partes, setParte, eliminarParte}) => {
  //console.log(partes);

  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen md:overflow-y-scroll">
      {partes && partes.length ? (
        <>
          <h2 className="font-black text-3xl text-center">Listado de Partes</h2>
          <p className="text-xl mt-5 mb-10 text-center">
            Administra tus {''}
            <span className="text-indigo-600 font-bold">Partes de Trabajo</span>
          </p>
          {partes.map(parte =>(
            <Parte
              key={parte.id} 
              parte={parte}
              setParte={setParte}
              eliminarParte={eliminarParte}
            />
          ))}
        </>
      ) : (
        <>
          <h2 className="font-black text-3xl text-center">No hay Partes</h2>
            <p className="text-xl mt-5 mb-10 text-center">
              Comienza agregando tus Partes {""}
              <span className="text-indigo-600 font-bold">y aparecerán en este lugar</span>
            </p>
        </>
      )}
      
      
      
    </div>
  )
}

export default ListadoPartes