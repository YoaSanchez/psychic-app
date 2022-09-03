import { useState } from "react";
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import CartWidget from "../CartWidget/CartWidget";
import { BsPlusLg, BsDashLg } from "react-icons/bs";

function ItemCount({ stock, initial }) {
    const [cart, setCart] = useState([])
    const [count, setCount] = useState(initial)

    return (
        <div>
            <CartWidget cartCount={cart.length} />

            <div>
                <div>
                    nombre producto
                </div>
                <div>
                    <ButtonGroup>
                        <Button variant="secondary" onClick={() => {
                            if (count > initial) {
                                setCount(count - 1)
                            }
                        }}><BsDashLg /></Button>
                        <Button variant="secondary" className="px-4" disabled>{count}</Button>
                        <Button variant="secondary" onClick={() => {
                            if (count < stock) {
                                setCount(count + 1)
                            }
                        }}><BsPlusLg /></Button>
                    </ButtonGroup>
                </div>
            </div>
            <div>
                <button onClick={() => {
                    if (stock > cart.length) {
                        setCart([...cart, 'Item']);
                    }
                }} >Agregar al carrito</button>
            </div>
        </div>
    );
}

export default ItemCount;