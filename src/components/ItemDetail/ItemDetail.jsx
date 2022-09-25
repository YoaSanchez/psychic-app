import { useContext } from "react"
import { Col, Container, Row } from "react-bootstrap"
import { Context } from "../Cart/CartContext"
import ItemCount from "../ItemCount/ItemCount"


const ItemDetail = ({ card }) => {

    const { addItem } = useContext(Context);

    const onAdd = (count) => {
        addItem(card, count);
    }

    return (
        <Container key={card.id}>
            <Row>
                <Col>
                    <img src={card.thumbnail} alt={card.title} />
                </Col>
                <Col>
                    <h2>{card.title}</h2>
                    <div>SKU: {card.id}</div>
                    <div>Stock: {card.initial_quantity}</div>
                    {/* cambie available_quantity por initial_quantity para que funcione, cuando se arregle la api lo vuelvo a cambiar*/}
                    <div>Precio: ${card.price}</div>
                    <ItemCount stock={card.initial_quantity} initial={1} onAdd={onAdd} />
                </Col>
            </Row>
            <div>
                <h4>
                    card.description
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
