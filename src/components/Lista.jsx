import React from 'react'
import { useState } from 'react'
import TareasRealizar from './TareasRealizar'


function Lista({listaTareas, setListaTareas}) {
 
  // este se le va a sumar uno cuando le den click a los iconos de completado que a su vez tengo que añadirle 
  //una clase personalizada cuando le den click
  const [tareasRealizadas , setTareasRealizadas] = useState(0)
  const [busqueda, setBusqueda] = useState('')

  

  // logica del filtrado de la lista 

  let busquedaTareas = []

  if(busqueda.length >= 1){

      busquedaTareas = listaTareas.filter( tarea => {
      const textoTarea = tarea.nombre.toLowerCase()
      const textoBusqueda = busqueda.toLowerCase()
      return textoTarea.includes(textoBusqueda)
    })

    } else{

    busquedaTareas = listaTareas
  }

  
  

  return (
    <div className='w-1/2 bg-white mx-auto rounded-lg shadow-lg'>
      <div className="mt-3 px-5 py-3 justify-center ">
          <h2 className='text-slate-400 text-xl text-center font-bold p-3'>Tus Tareas</h2>
          <p className='text-base text-center text-slate-500'>Haz completado {tareasRealizadas} de <span className='text-green-600 font-bold'>{listaTareas.length} tareas</span></p>
          <input type='text'
          className='  p-3  border-2 border-gray-300 mt-3 rounded-lg w-full mb-3'
          placeholder='Buscar Tareas'
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}/>
      </div>

      {busquedaTareas.map(tarea => (
        <TareasRealizar
        key={tarea.nombre}
        tarea={tarea}
        
        listaTareas={listaTareas}
        setListaTareas={setListaTareas}
        tareasRealizadas={tareasRealizadas}
        setTareasRealizadas={setTareasRealizadas}
        />
      ))}
    </div>
  )
}

export default Lista
