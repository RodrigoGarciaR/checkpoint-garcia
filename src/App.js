import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ItemsProvider } from './context/ItemsContext';
import Cart from './components/Cart/Cart';
import { CartProvider } from './context/CartContext';

function App() {
    return (
        <BrowserRouter>
            <ItemsProvider>
                <CartProvider>
                    <NavBar />
                    <Routes>
                        <Route path="/" element={<ItemListContainer />} />
                        <Route
                            path="/category/:category"
                            element={<ItemListContainer />}
                        />
                        <Route
                            path="/item/:itemId"
                            element={<ItemDetailContainer />}
                        />
                        <Route path="/cart" element={<Cart />} />
                    </Routes>
                </CartProvider>
            </ItemsProvider>
        </BrowserRouter>
    );
}

export default App;
