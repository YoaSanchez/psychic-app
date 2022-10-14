import React from "react"
import { useContext, useState, useEffect } from "react"
import { Link } from 'react-router-dom';
import { Context } from "./CartContext"
import CartItem from "./CartItem"

const Cart = () => {
    const { carrito, clear, total } = useContext(Context);
    const [precioTotal, setPrecioTotal] = useState(0);

    useEffect(() => {
        setPrecioTotal(total());        // eslint-disable-next-line
    }, [carrito]);

    return (
        <>
            {carrito.length > 0 ? (
                <>
                    {carrito.map((element) => <CartItem card={element} />)}
                    <br />
                    <h2>Total de tu compra: ${precioTotal}</h2>
                    <br />
                    <button onClick={clear}>Clear Cart</button>
                    <div>
                        <br />
                        <Link to={'/contactForm'}><button>Formulario compra</button></Link>
                    </div>
                </>
            ) : (
                <>
                    <h2>Tu Carrito esta vacio</h2>
                </>
            )}
        </>
    )
}

export default Cart
