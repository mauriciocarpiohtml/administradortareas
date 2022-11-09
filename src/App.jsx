import { useState } from 'react'
import Formulario from './components/Formulario'
import Lista from './components/Lista'

function App() {
  const [listaTareas , setListaTareas] = useState([])
  
  

  return (
   <> 
      <div className='flex mt-10 gap-10 w-4/5 mx-auto'>
        <Formulario 
          listaTareas={listaTareas}
          setListaTareas={setListaTareas}
          />
        <Lista 
          listaTareas={listaTareas}
          setListaTareas={setListaTareas}
          
          />
      </div>
   </>
  )
}

export default App
