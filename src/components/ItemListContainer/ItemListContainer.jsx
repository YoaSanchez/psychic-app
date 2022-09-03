import { useEffect, useState } from "react";
import ItemList from '../itemList/itemList';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

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
        searchCards()
    })

    return (
        <Container>
            <Row>
                <ItemList cards={cards} />
            </Row >
        </Container>
    )
}

export default ItemListContainer;
