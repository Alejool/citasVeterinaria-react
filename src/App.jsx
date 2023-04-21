import { useEffect, useState } from 'react'
import Header from './components/Header'
import ListadoPacientes from './components/ListadoPacientes'
import Formulario from './components/Formulario'




function App() {
  const [pacientes, setPacientes] = useState(JSON.parse(localStorage.getItem('pacientes')) ?? []) // indica que l valor inicial siempre sera el valor inical del localstroge
  const [paciente, setPaciente] = useState({})



  useEffect(()=>{
    agregarLocalStorage();
  }, [pacientes])
 
 

  const agregarLocalStorage=()=>{
    //lo convierte n string, actualiza y elimna dependiendo del estado
    localStorage.setItem('pacientes', JSON.stringify(pacientes))
  }

  const eliminarPaciente=id=>{
      const actualizado=pacientes.filter(eliminar=> eliminar.id!==id);
      setPacientes(actualizado)
  }


  return (
    <div className='container mx-auto mt-20 '>

      <Header/>
      

      <div className='mt-20 md:flex md:gap-5 '>

        < Formulario
          setPacientes={setPacientes}
          pacientes={pacientes}
          paciente={paciente}
          setPaciente={setPaciente}
        />
        <ListadoPacientes
         pacientes={pacientes}
         setPaciente={setPaciente}
         eliminarPaciente={eliminarPaciente}
         />
        
        
      </div>
      
    </div>
  )
}

export default App
