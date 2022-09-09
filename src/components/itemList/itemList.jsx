import { Row } from "react-bootstrap";
import Item from "../item/Item";

const ItemList = ({ cards }) => {

    return (
        <Row>
            {
                cards.map(card => {
                    return <Item card={card} />
                })
            }
        </Row>
    )
}

export default ItemList;
