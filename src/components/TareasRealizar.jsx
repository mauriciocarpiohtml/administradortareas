import React, { useState } from 'react'

//ok falta añadirle funcionalidad de eliminarla de la lista de tareas 
// crear un state de la cantidad de tareas 
//

function TareasRealizar({tarea, tareasRealizadas, setTareasRealizadas,listaTareas, setListaTareas}) {
    
    const {nombre} = tarea
    const [tareaTerminada, setTareaTerminada] = useState(false)

    function tareaRealizada(){
      setTareaTerminada(true)
      setTareasRealizadas(tareasRealizadas +1 )
      
    }

    function tareaEliminada(item){

      const tareasEliminadas = listaTareas.filter( tarea => tarea.nombre !== item.nombre)
      setListaTareas(tareasEliminadas)
    
    }
    
  return (
    <div className='px-8 '>
        <div className='rounded-lg bg-gray-200 shadow-lg mt-3 p-3 w-full mb-5  flex justify-between items-center'>
        
        <button 
        onClick={tareaRealizada}
        className={`rounded-3xl text-white font-bold  p-2 bg-green-500 hover:bg-green-600 transition-transform	duration-700  ${tareaTerminada && 'scale-0'}`}>
          ✓
        </button>
        
          <p className={`text-base text-center p-1 font-bold text-slate-600 uppercase  ${tareaTerminada && 'line-through decoration-double decoration-black'}`}> {nombre}</p>

        <button
        onClick={() => tareaEliminada(tarea)} 
        className=' rounded-3xl text-white font-bold  p-1 bg-red-500 hover:bg-red-600'>
          X
        </button>

        
        </div>
    </div>
    
  )

}


export default TareasRealizar
