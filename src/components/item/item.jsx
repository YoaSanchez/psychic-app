import { useEffect, useState } from "react";
import ItemCount from "../ItemCount/ItemCount";

const Item = () => {
    const [cards, setCards] = useState([]);

    const searchCards = async () => {

        try {
            const response = await fetch(`https://api.mercadolibre.com/sites/MLA/search?q=poni`)
            const data = await response.json();
            setCards(data.results)
        } catch (e) {
            console.log(e)
        }
    }
    useEffect(() => {
        searchCards()
    })

    return (
        <div>
            {cards.map((card) => {
                return (
                    <div>
                        <h3>
                        {card.title}
                        </h3>
                        <div>
                            <img src={card.thumbnail} alt={card.title} />
                            <div>
                                boton detalles
                            </div>
                        </div>
                        <div>
                        {card.available_quantity}
                        </div>
                        <div>
                            <ItemCount stock={card.available_quantity} initial={1}/>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Item;

