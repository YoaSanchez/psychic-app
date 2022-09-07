import { useEffect, useState } from "react";

import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
    const [cards, setCards] = useState([])

    const searchCards = async () => {

        try {
            const response = await fetch(`https://api.mercadolibre.com/items/MLC600319788`)
            const data = await response.json();
            setCards(data)
        } catch (e) {
            console.log(e)
        }
        console.log(cards)
    }
    useEffect(() => {
        searchCards() // eslint-disable-next-line
    }, [])

    return (
            <ItemDetail cards={cards}/>
    )
}

export default ItemDetailContainer;
