import { useState } from "react";
import ItemCount from '../ItemCount/ItemCount' ;
import CartWidget from "../CartWidget/CartWidget";

const ItemListContainer = () => {
    const [cart, setCart] = useState([])

    const onAdd = () => {
        console.log('Listo, tu producto esta en el carrito');
        setCart([...cart, 'lo que sea']);
    }

    return (
        <div>
            <div>
            <CartWidget cartCount={cart.length}/>
            </div>
            <div>
                <ItemCount stock={10} initial={1} onAdd={onAdd} />
            </div>
        </div>
    )
}

export default ItemListContainer;