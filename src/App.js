import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ItemsProvider } from "./ItemsContext";
import Cart from "./components/Cart/Cart";

function App() {
    return (
        <BrowserRouter>
            <ItemsProvider>
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
            </ItemsProvider>
        </BrowserRouter>
    );
}

export default App;
