import { collection, getDocs, getFirestore } from "firebase/firestore";
import { useEffect, useState } from 'react';
import { NavDropdown } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { BsSearch } from "react-icons/bs";
import { Link } from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget';

function NavBar() {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    const db = getFirestore();
    const items = collection(db, 'categories');
    getDocs(items).then((snapshot) => {
      const docs = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setCategories(docs);
    });           // eslint-disable-next-line
  }, []);

  return (
    <Navbar bg="secondary" expand="lg">
      <Container>
        <Navbar.Brand>
          <Link to='/'> <img className='logo' src="/pngegg.png" alt="logo" /> </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
            <NavDropdown title="Categorias" id="basic-nav-dropdown">
              {
                categories.map(category => {
                  return <Link to={`/category/${category.name}`}><NavDropdown.Item href="#action/3.3" key={category.id}>{category.name}</NavDropdown.Item></Link>
                })
              }
            </NavDropdown>
          </Nav>

          <CartWidget cartCount={0} />

          <Form className="p-3 d-flex">
            <Form.Control type="search" placeholder="Buscar" className="me-2" aria-label="Search" />
            <Button variant="secondary">
              <BsSearch value={{ color: "blue" }} />
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar;
