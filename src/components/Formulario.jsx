import {useState, useEffect} from 'react';
import { v4 as uuidv4 } from 'uuid';
import Error from './Error';
import Paciente from './Paciente';


function Formulario({pacientes, setPacientes, paciente, setPaciente}) {
  const [nombre, setNombre]=useState('');
  const [email, setEmail]=useState('');
  const [mascota, setMascota]=useState('');
  const [sintomas, setSintomas]=useState('');
  const [fecha, setFecha]=useState('');

  /** inicializo ya que en principio se esta creeando una cita */
  // const [tipo, setTipo]=useState('añadir cita ');

  const [error, setError]=useState(false);
  
  useEffect(()=>{

   if(Object.keys(paciente).length>0){
    const {nombre, email, mascota, fecha, sintomas, id}= paciente;
    setNombre(nombre)
    setEmail(email)
    setMascota(mascota)
    setFecha(fecha)
    setSintomas(sintomas)

    // /** cambio el valor del button para indicar que esta actualizand' */

    // setTipo('Actualizar cita ');
    }
    
  },[paciente])


  function handleSubmit(e)
  {
    e.preventDefault();
    if( [nombre, email, mascota, sintomas, fecha].includes('')){
      setError(true);
      return;
    }
    setError(false);

    // objeto de paciente
    const objetoPaciente={
      nombre,
      email,
      mascota,
      sintomas,
      fecha,
      id: uuidv4()
    }

    
    // estamos editando
    if(paciente.id){
      objetoPaciente.id=paciente.id

      // creamos un nuevo objeto
      const actualizado=pacientes.map(buscado=>buscado.id===paciente.id ? objetoPaciente:buscado )
      setPacientes(actualizado)
      setPaciente({})

    }
    else 
    {
        // una copia de pacientes y agregar pacientes con el spred operator
      setPacientes([...pacientes, objetoPaciente]);
    }

      reiniciarForm();
    
  }

  function reiniciarForm() {
    //reiniciar form
    setNombre('');
    setEmail('');
    setMascota('');
    setSintomas('');
    setFecha('');
  }



 
  return (
    <div className="md:w-1/2 lg:w-2/5 text-center ">
    
    
      <h2 className="mb-9 text-3xl font-black font-serif">Seguimiento paciente</h2>
      <p className="text-lg ">Añade pacientes y <span className="text-morado font-bold"> administralos</span></p>


      <form 
        className="bg-white mt-3 shadow-lg rounded-md pt-10 pb-7 px-4 font-mono mb-10"
        onSubmit={handleSubmit}
        >

        {error && <Error
                    mensaje='todos los campos son obligatorios'
                  />}

      <fieldset className="border-dotted border-2 p-4 mb-4">
        <legend className="text-white sm:text-start text-sm font-bold px-8 py-1 shadow-slg border-2 rounded-md bg-grisClaro uppercase ">Propietario <i className="bi bi-person-plus"></i></legend>
        
         <div className="xl:flex justify-between items-center gap-2 mb-3">
           <label className=" w-24 block text-start font-bold text-gris uppercase " htmlFor="nombre">Nombre: </label>
           <input 
            id="nombre" 
            className="rounded-md p-2  lg:mt-0 w-full border   " 
            type="text" 
            placeholder="Alejandro, josue, etc"
            value={nombre}
            onChange={(e)=> setNombre(e.target.value) }
            /> 
         </div> {/** fin campo */}
         
         <div className="xl:flex justify-between items-center gap-2 mb-3">
           <label className=" w-24  block text-start font-bold text-gris uppercase " htmlFor="email">Email: </label>
           <input 
            id="email" 
            className="rounded-md p-2  lg:mt-0 w-full border   " 
            type="email" 
            placeholder="correo@gmail.com" 
            value={email}
            onChange={(e)=> setEmail(e.target.value) }
            required
            />
         </div>  {/** fin campo */}
       </fieldset>  {/** fin fieldset */}


       <fieldset className="border-dotted border-2 p-4 mb-4">
         <legend className="text-white sm:text-start text-sm font-bold px-8 py-1 shadow-slg border-2 rounded-md bg-grisClaro uppercase ">Mascota <i className="bi bi-plus"></i></legend>
        
         <div className="xl:flex justify-between items-center gap-2 mb-3">
           <label className="w-24 block text-start font-bold text-gris uppercase " htmlFor="nombre-mascota">Nombre: </label>
           <input 
            id="nombre-mascota" 
            className="rounded-md p-2  lg:mt-0 w-full border   " 
            type="text" 
            placeholder="Dino, masha, hook, etc"
            value={mascota}
            onChange={(e)=> setMascota(e.target.value) }
            /> 
         </div>  {/** fin campo */}
         
         <div className="xl:flex justify-between items-center gap-2 mb-3">
           <label className=" w-24 block text-start font-bold text-gris uppercase " htmlFor="sintomas">sintomas: </label>
           <textarea 
            id="sintomas" 
            placeholder="solo duerme, esta constantemente durmiendo, etc" 
            className="resize-none rounded-md p-2 lg:mt-0 w-full border" 
            type="text"  
            rows='7'
            value={sintomas}
            onChange={(e)=> setSintomas(e.target.value) }
            />  
         </div>  {/** fin campo */}

         <div className="xl:flex justify-between items-center gap-2 mb-3">
           <label className="w-24 block text-start font-bold text-gris uppercase " htmlFor="alta">Alta: </label>
           <input 
            id="alta" 
            className="rounded-md p-2 lg:mt-0 w-full border" 
            type="date"
            value={fecha} 
            onChange={(e)=> setFecha(e.target.value) }
            /> 
         </div>  {/** fin campo */}

       </fieldset>  {/** fin fieldset */}

       <button
        type="submit" 
        className="block w-full py-2 font-bold uppercase font-sans bg-azul rounded-md text-white hover:cursor-pointer " 
        > <i className="bi bi-send"></i> {paciente.id?'actualizar paciente' : 'crear paciente' }</button> 
        


      </form>

    </div>
  )
}

export default Formulario


