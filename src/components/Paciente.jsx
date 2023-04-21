import React from 'react'

function Paciente({paciente, setPaciente, eliminarPaciente}) {

    const{nombre, mascota, email, sintomas, fecha, id}=paciente;

    const handleEliminar=()=>{
      const respuesta=confirm('¿Deseas eliminar este registro?')

     if(respuesta){
      eliminarPaciente(id)
     }
    }



  return (
    
    <div className="font-bold rounded-xl bg-white shadow-md  p-5 md:p-7 block font-mono lg:flex  flex-col justify-between  border-l-4 border-morado">

     
      <p className="uppercase text-center mb-1 text-lg font-sans font-black" >
       <span className="text-gris ">{mascota} </span>
      </p> {/**info seccion */}
      
    
     <div>
        <p className=" font-sans" >Propietario:  {''}
         <span className="text-azul capitalize  font-serif ">{nombre}  </span>
        </p> {/**info seccion */}
        <p className=" font-sans py-1" >Email:  {''}
          <span className="text-azul normal-case  font-normal font-serif  ">{email}  </span>
        </p> {/**info seccion */}
        <p className=" font-sans text-justify font-bold" >Síntomas:  {''}
          <span className="text-azul normal-case  font-normal font-serif ">{sintomas}  </span>
        </p> {/**info seccion */}
      </div>

     <div className='flex justify-between align-center mt-5'>
       <p className=" text-end mt-2  " >
         <span className="text-morado normal-case "> {fecha}  </span>
       </p> {/**info seccion */}

       <div>
        <button 
          className='bg-amarillo me-2 text-sm md:text-lg py-1 px-3 text-white rounded '
            onClick={()=>setPaciente(paciente)}>
            Editar
          </button>
        <button 
          className='bg-rojo rounded text-sm md:text-lg py-1 px-3 text-white'
          onClick={handleEliminar}
          >Eliminar
          </button>
       </div>
     </div>

    </div> 
  )
}

export default Paciente
