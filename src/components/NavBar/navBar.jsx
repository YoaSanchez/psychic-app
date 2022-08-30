import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { BsSearch } from "react-icons/bs";

//Componentes
import CartWidget from '../CartWidget/CartWidget';

//imagenes
import logo from './img/pngegg.png'

function NavBar() {
  return (
    <Navbar bg="secondary" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#action0">
            <img className='logo' src={logo} alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
            <Nav.Link href="#action1">Categorias</Nav.Link>
            <Nav.Link href="#action2">Quienes somos</Nav.Link>
          </Nav>

          <CartWidget cartCount={0}/>
          
          <Form className="p-3 d-flex">
            <Form.Control type="search" placeholder="Buscar" className="me-2" aria-label="Search" />
            <Button variant="secondary">
                <BsSearch value={{ color: "blue"}}/>
            </Button>
          </Form>
        </Navbar.Collapse>
        
      </Container>
    </Navbar>
  );
}

export default NavBar;