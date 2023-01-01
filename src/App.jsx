import { useState } from 'react'
import {Container} from 'react-bootstrap'
import DrinkForm from './components/DrinkForm'
import { CategoriesProvider } from './context/CategoriesProvider'

function App() {
  const [count, setCount] = useState(0)

  return (
    <CategoriesProvider>
      <header className='py-5'>
        <h1>Creador de Bebidas</h1>
      </header>

      <Container className="mt-5">
        <DrinkForm />
      </Container>
    </CategoriesProvider>
  )
}

export default App
