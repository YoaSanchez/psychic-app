import { collection, getDocs, getFirestore, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import ItemList from '../itemList/itemList';

const ItemListContainer = () => {
    const [cards, setCards] = useState([])
    const { categoryId } = useParams();

    useEffect(() => {
        const db = getFirestore();
        const items = collection(db, 'items');
        const q = query(items, where('categoryId', '==', categoryId));
        getDocs(q).then((snapshot) => {
            const docs = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }));
            setCards(docs);
        });
    }, [cards]);

    return (
        <Container>
            <ItemList cards={cards} />
        </Container>
    )
}

export default ItemListContainer;
