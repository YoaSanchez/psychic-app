import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import ItemList from '../itemList/itemList';

const ItemListContainer = () => {
    const [cards, setCards] = useState([])
    const [categories, setCategories] = useState([])

    const { categoryId } = useParams();

    //MLC418448
    const searchCards = async () => {
        try {
            const response = await fetch(`https://api.mercadolibre.com/sites/MLC/search?category=${categoryId}`)
            const data = await response.json();
            setCards(data.results);
            setCategories(data.filters[0].values[0].path_from_root[0]);
        } catch (e) {
            console.log(e)
        }
    }
    useEffect(() => {
        searchCards() // eslint-disable-next-line
    }, [])

    return (
        <Container>
            <h2>{categories.name}</h2>
            <ItemList cards={cards} />
        </Container>
    )
}

export default ItemListContainer;
