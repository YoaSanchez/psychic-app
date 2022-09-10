import ItemCount from "../ItemCount/ItemCount";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Col from 'react-bootstrap/Col';
import { Link } from "react-router-dom";

const Item = ({ card }) => {

    return (
        <Col key={card.id}>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={card.thumbnail} />
                <Card.Body>
                    <Card.Title>{card.title}</Card.Title>
                    <ListGroup className="list-group-flush">
                        <Link to={`/detail/${card.id}`}><Button variant="primary">Detalles</Button></Link>
                        <ListGroup.Item>precio: ${card.price}</ListGroup.Item>
                        <ListGroup.Item>Stock: {card.available_quantity}</ListGroup.Item>
                    </ListGroup>
                    <ItemCount stock={card.available_quantity} initial={1} onAdd={card.title} />
                </Card.Body>
            </Card>
        </Col>
    )
}

export default Item;
