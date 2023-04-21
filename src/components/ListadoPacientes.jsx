import { useEffect } from "react"

import Paciente from "./Paciente"


// rfce= crear componentes nuevos

const ListadoPacientes=({pacientes, setPaciente, eliminarPaciente})=> {

  
 

  return (
    <div className=" md:w-1/2 lg:w-3/5 ">


      { pacientes && pacientes.length ?(
        <div className="bg-transparent " >
          <h2 className="font-black text-3xl font-serif text-center">Listado pacientes </h2>
          <p className="text-xl  mt-8 mb-4 text-center">
          Administra tus {''}
           <span className="text-morado font-bold ">citas </span>
          </p>

          <div className="  text-gris xl:grid grid-cols-2 gap-4 grid-flow-row auto-rows-min flex flex-col overflow-y-scroll scroll-smooth h-screen ">

          {pacientes.map(paciente=>(
            <Paciente 
              key={paciente.id}
              paciente={paciente}
              setPaciente={setPaciente}
              eliminarPaciente={eliminarPaciente}
            />
          ))}
          </div> 
        </div>
        ):(
        <>
          <h2 className="font-black text-3xl font-serif text-center">No hay pacientes </h2>
          <p className="text-xl  mt-8 mb-4  text-center">
          Comienza agregando pacientes  {''}
           <span className="text-morado font-bold "> Apareceran aquí </span>
          </p>
        </>) 
      }
      
        
    </div>
  )
}

export default ListadoPacientes
