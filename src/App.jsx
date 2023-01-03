import { useState } from 'react'
import { Container } from 'react-bootstrap'
import DrinkForm from './components/DrinkForm'
import { CategoriesProvider } from './context/CategoriesProvider'
import { DrinksProvider } from './context/DrinksProvider'
import DrinksList from './components/DrinksList'
import DrinkModal from './components/DrinkModal'

function App() {

  return (
    <DrinksProvider>
      <CategoriesProvider>
        <header className='py-3'>
          <h1>Buscador de Bebidas</h1>
        </header>

        <Container className="mt-5">
          <DrinkForm />

          <DrinksList />

          <DrinkModal/>
        </Container>
      </CategoriesProvider>
    </DrinksProvider>
  )
}

export default App
