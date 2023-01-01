import { Button, Form, Row, Col, FormGroup } from 'react-bootstrap'

const DrinkForm = () => {
  return (
    <Form>
      <Row>
        <Col md={6}>
          <Form.Group className="mb-3">
            <Form.Label htmlFor='name'>Nombre de la bebida</Form.Label>
            <Form.Control
              id='name'
              type="text"
              placeholder="Ej: Tequila, Vodka, etc."
              name="name"
            />
          </Form.Group>
        </Col>
        <Col md={6}>
        <Form.Group className="mb-3">
            <Form.Label htmlFor='category'>Categoría</Form.Label>
            <Form.Select 
              id="category"
              name="category"
            >
              <option value="">- Selecciona Categoría -</option>
            </Form.Select>
          </Form.Group>
        </Col>
      </Row>
    </Form>
  )
}

export default DrinkForm