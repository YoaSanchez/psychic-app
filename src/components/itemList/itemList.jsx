import Item from "../item/item";

const ItemList = ({cards}) => {

    return (
        <div>
            {
                cards.map(card => {
                    return <Item card={card} />
                })
            }
        </div>
    )
}

export default ItemList;
