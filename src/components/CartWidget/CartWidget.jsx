import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
//icono
import cart4 from './img/cart4.svg';


const CartWidget = () => {
    return (
        <div>
            <a href="#action3">
                <Button variant="secondary">
                <img src={cart4} alt="carro"></img>
                <Badge bg="">0</Badge>
                </Button>
            </a>
        </div>
    )
}

export default CartWidget;
