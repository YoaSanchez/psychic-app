import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/navBar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <br />
        <Routes>
          <Route exact path="/" element={<ItemListContainer />} />
          <Route  path="/detail/:itemId" element={<ItemDetailContainer />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
