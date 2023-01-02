import { useState } from 'react'
import { Container } from 'react-bootstrap'
import DrinkForm from './components/DrinkForm'
import { CategoriesProvider } from './context/CategoriesProvider'
import { DrinksProvider } from './context/DrinksProvider'
import DrinksList from './components/DrinksList'

function App() {

  return (
    <DrinksProvider>
      <CategoriesProvider>
        <header className='py-5'>
          <h1>Buscador de Bebidas</h1>
        </header>

        <Container className="mt-5">
          <DrinkForm />

          <DrinksList />
        </Container>
      </CategoriesProvider>
    </DrinksProvider>
  )
}

export default App
