import { createContext, useState } from "react";

export const Context = createContext();

const CartContext = ({ children }) => {

    const [carrito, setCarrito] = useState([]);

    const addItem = (card, count) => {
        card.quantity = count;
        setCarrito([...carrito, card]);
    }
    return <Context.Provider value={{ addItem }}>{children}</Context.Provider>
}

export default CartContext;