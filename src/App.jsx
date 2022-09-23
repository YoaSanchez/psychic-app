import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Cart from './components/Cart/Cart';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/navBar';
import Home from './Home/Home';
import CartContext from './components/Cart/CartContext';

function App() {
  return (
    <div className="App">
      <CartContext>
        <BrowserRouter>
          <NavBar />
          <br />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/category/:categoryId" element={<ItemListContainer />} />
            <Route path="/detail/:itemId" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </BrowserRouter>
      </CartContext>
    </div>

  );
}

export default App;
