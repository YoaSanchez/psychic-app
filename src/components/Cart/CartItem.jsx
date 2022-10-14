import React from "react"
import { useContext } from "react"
import { Context } from "./CartContext"

const CartItem = ({ card }) => {

    const deleteItem = () => {
        removeItem(card.id)
    }
    const { removeItem } = useContext(Context)
    return (
        <>
            <h2>{card.title} - {card.quantity}- {card.price}</h2>
            <button onClick={deleteItem}>eliminar</button>
        </>
    )
}

export default CartItem
