import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import ItemList from '../itemList/itemList';

const ItemListContainer = () => {
    const [cards, setCards] = useState([])

    const searchCards = async () => {

        try {
            const response = await fetch(`https://api.mercadolibre.com/sites/MLC/search?q=teclado`)
            const data = await response.json();
            setCards(data.results)
        } catch (e) {
            console.log(e)
        }
        console.log(cards)
    }
    useEffect(() => {
        searchCards() // eslint-disable-next-line
    }, [])

    return (
        <Container>
            <ItemList cards={cards} />
        </Container>
    )
}

export default ItemListContainer;
