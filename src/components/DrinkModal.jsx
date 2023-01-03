import { Modal, Image } from 'react-bootstrap'
import useDrinks from '../hooks/useDrinks'

const DrinkModal = () => {
  const { modal, handleModalClick, recipe, loading } = useDrinks()

  console.log(recipe)

  const showIngredients = () => {
    let ingredients = []

    for (let i = 1; i < 16; i++) {
      if (recipe[`strIngredient${i}`]) {
        ingredients.push(
          <li>{recipe[`strIngredient${i}`]}: {recipe[`strMeasure${i}`]}</li>
        )
      }
    }
    return ingredients
  }

  return (
    !loading && (
      <Modal
        show={modal}
        onHide={handleModalClick}
      >
        <Image
          src={recipe.strDrinkThumb}
          alt={`Imagen receta de ${recipe.strDrink}`}
        />
        <Modal.Header>
          <Modal.Title>{recipe.strDrink}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="p-3">
            <h2>Intrucciones</h2>
            <p>recipe.strInstructions</p>
            <h2>Ingredientes y Cantidad</h2>
            <p>{showIngredients()}</p>
          </div>
        </Modal.Body>
      </Modal>
    )
  )
}

export default DrinkModal