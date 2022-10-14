import { useContext } from 'react';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import { BsCart4 } from "react-icons/bs";
import { Link } from 'react-router-dom';
import { Context } from '../Cart/CartContext';

const CartWidget = () => {
    const { carrito } = useContext(Context);

    return (
        <div>
            <a href="#action3">
                <Link to='/cart'><Button variant="secondary">
                    <BsCart4 />
                    <Badge bg="">{carrito.length}</Badge>
                </Button></Link>
            </a>
        </div>
    )
}

export default CartWidget;
