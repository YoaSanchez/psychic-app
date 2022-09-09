import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
    const [card, setCard] = useState([])

    const { itemId } = useParams();

    const searchCard = async () => {

        try {
            const response = await fetch(`https://api.mercadolibre.com/items/${itemId}`)
            const data = await response.json();
            setCard(data)
        } catch (e) {
            console.log(e)
        }
    }
    useEffect(() => {
        searchCard() // eslint-disable-next-line
    }, [])

    return (
        <ItemDetail card={card} />
    )
}

export default ItemDetailContainer;
