import { Col, Container, Row } from "react-bootstrap"
import ItemCount from "../ItemCount/ItemCount"

const ItemDetail = ({ cards }) => {

    return (
        <Container key={cards.id}>
            <Row>
                <Col>
                    <img src={cards.thumbnail} alt={cards.title} />
                </Col>
                <Col>
                    <h2>{cards.title}</h2>
                    <div>SKU: {cards.id}</div>
                    <div>Stock: {cards.available_quantity}</div>
                    <div>Precio: ${cards.price}</div>
                    <ItemCount stock={cards.available_quantity} initial={1} onAdd={cards.title} />
                </Col>
            </Row>
            <div>
                <h4>
                    cards.description
                </h4>
                <div>
                    aqui deberia estar alguna descripcion pero en la api no hay de donde encontrarla, asique lo resolvere despues.
                    <br />
                    tiempo despues de poner esto, encontre como poner la descripcion pero va mas alla de lo que se hasta el momento y lo que logre encontrar en internet, en clase lo preguntare
                </div>
            </div>
        </Container>
    )
}

export default ItemDetail