import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemDetailContainer from './components/views/ItemDetailContainer/ItemDetailContainer';
import Home from './components/views/Home/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cart from './components/views/Cart/Cart';
import Products from './components/views/Products/Products';
import { CartProvider } from './context/CartContext';
import Shop from './components/views/Checkout/Checkout';
import Category from './components/views/Category/Category';
import Footer from './components/Footer/Footer';

function App() {
    return (
        <BrowserRouter>
            <CartProvider>
                <NavBar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/productos" element={<Products />} />
                    <Route path="/category/:category" element={<Category />} />
                    <Route
                        path="/item/:itemId"
                        element={<ItemDetailContainer />}
                    />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/checkout" element={<Shop />} />
                </Routes>
                <Footer />
            </CartProvider>
        </BrowserRouter>
    );
}

export default App;
