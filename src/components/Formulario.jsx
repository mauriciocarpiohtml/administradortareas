import { useState } from 'react'

function Formulario({ listaTareas, setListaTareas}) {
    
    const [nombre, setNombre] = useState('')

    function validarTarea(e){
        if(nombre ===''){
            console.log('La tarea esta vacia maestro')
            return
        }
        e.preventDefault()

        const objetoTarea= {
            nombre
        }

        setListaTareas([...listaTareas, objetoTarea])
        setNombre('')
    }

  return (
    <div className='w-1/2 bg-white mx-auto rounded-lg shadow-lg h-64'>
        <div className="mt-3 px-5 py-3 justify-center ">
          <h2 className='text-slate-400 text-xl text-center font-bold p-3'>Crea una nueva tarea</h2>
          <p className='text-base text-center text-slate-500'>Escribe tu tarea <span className='text-green-600 font-bold'>y enviala</span></p>
          <input 
          type='text'
          className='  p-3  border-2 border-gray-300 mt-3 rounded-lg w-full'
          placeholder='Llorar con la llorona'
          value={nombre}
          onChange={(e)=>setNombre(e.target.value)}/>

          <input 
          type='button'
          className="p-3 bg-green-600 hover:bg-green-800 cursor-pointer font-bold
           text-white w-full uppercase mt-5 mb-10 rounded-lg" 
          value='Enviar tarea'
          onClick={validarTarea} />
        </div>
      
      
    </div>
  )
}

export default Formulario
