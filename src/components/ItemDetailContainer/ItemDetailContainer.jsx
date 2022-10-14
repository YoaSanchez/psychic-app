import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getFirestore, doc, getDoc } from "firebase/firestore";

import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
    const [card, setCard] = useState([])
    const { itemId } = useParams();

    useEffect(() => {
        if (itemId) {
            const db = getFirestore();
            const itemRef = doc(db, 'items', itemId.trim());
            getDoc(itemRef).then((snapshot) => {
                setCard(snapshot.data());
            });
        }
    }, [itemId]);

    return (
        <ItemDetail card={card} id={itemId} />
    )
}

export default ItemDetailContainer;
