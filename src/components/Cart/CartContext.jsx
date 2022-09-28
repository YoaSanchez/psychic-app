import { createContext, useState } from "react";

export const Context = createContext();

const CartContext = ({ children }) => {

    const [carrito, setCarrito] = useState([]);

    const addItem = (card, count) => {
        const anterior = isInCart(card.id);
        if (anterior) {
            const arreglo = carrito.filter((e) => e.id !== card.id);
            card.quantity = count + anterior.quantity;
            arreglo.push(card);
            setCarrito(arreglo);
        } else {
            card.quantity = count;
            setCarrito([...carrito, card]);
        }
    };

    const isInCart = (itemId) => {
        return carrito.find((e) => e.id === itemId);
    };

    const clear = () => {
        setCarrito([])
    }

    const removeItem = (itemId) => {
        setCarrito(carrito.filter((e) => e.id !== itemId))
    }

    const total = () =>{
        let totalPrice = 0;
        carrito.forEach((card) => {
            totalPrice = totalPrice + (card.price * card.quantity);
        });
        return totalPrice
    }

    return (
        <Context.Provider value={{ addItem, carrito, clear, removeItem, total }}>{children}</Context.Provider>
    )
}

export default CartContext