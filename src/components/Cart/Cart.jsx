import React, { useContext } from "react"
import { Context } from "./CartContext"
import CartItem from "./CartItem"

const Cart = () => {
    const { carrito } = useContext(Context)
    console.log(carrito);
    return carrito.map(elemento => <CartItem card={elemento} />);
}

export default Cart
