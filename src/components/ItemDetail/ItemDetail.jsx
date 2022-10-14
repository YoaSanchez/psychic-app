import { useContext } from "react"
import { Col, Container, Row } from "react-bootstrap"
import { Context } from "../Cart/CartContext"
import ItemCount from "../ItemCount/ItemCount"

const ItemDetail = ({ card, id }) => {
    const { addItem } = useContext(Context);

    const onAdd = (count) => {
        addItem(card, id, count);
    }

    return (
        <Container key={id}>
            <Row>
                <Col>
                    <img src={card.thumbnail} alt={card.title} />
                </Col>
                <Col>
                    <h2>{card.title}</h2>
                    <div>Stock: {card.stock}</div>
                    <div>Precio: ${card.price}</div>
                    <ItemCount stock={card.stock} initial={1} onAdd={onAdd} />  {/* en 'initial' quiero poner {card.minimo} pero se rompe y no aparece nada no se porque; la idea seria que la categoria porMayor exija comprar un minimo mas alto que los de la categoria alDetalle, en firestore esta el minimo de 1 para alDetalle y mas alto para porMayor */}
                </Col>
            </Row>
            <div>
                <h4>
                    Descripcion
                </h4>
                <div>
                    {card.description}
                </div>
            </div>
        </Container>
    )
}

export default ItemDetail
