import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
//icono
import {BsCart4} from "react-icons/bs";

const CartWidget = ({cartCount}) => {
    return (
        <div>
            <a href="#action3">
                <Button variant="secondary">
                <BsCart4/>
                <Badge bg="">{cartCount}</Badge>
                </Button>
            </a>
        </div>
    )
}

export default CartWidget;
