import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import  { getListar } from './linker/CallApi'

function App() {
  const [count, setCount] = useState(0)
  
  getListar()
  return (
    <>
     <h1>
      Challenge Latin AD
     </h1>
         </>
  )
}

export default App
