import { useState } from 'react'
import {Container} from 'react-bootstrap'
import DrinkForm from './components/DrinkForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header className='py-5'>
        <h1>Creador de Bebidas</h1>
      </header>

      <Container className="mt-5">
        <DrinkForm />
      </Container>
    </>
  )
}

export default App
