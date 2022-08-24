import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';

const ItemListContainer = () => {
    return (
        <div>
            <a href="#action4">
            <Button className='my-3'  variant='warning'>aqui ira el contador con botón</Button>
            <br />
            <Badge>0</Badge>
            </a>
        </div>
    )
}

export default ItemListContainer;