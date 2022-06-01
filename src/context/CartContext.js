import React, { createContext, useState } from 'react';

export const CartContext = createContext();

const initialCart = [];

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState(initialCart);

    const addProduct = (id, name, price, img, count) => {
        const newProduct = {
            id: id,
            name: name,
            price: price,
            img: img,
            qty: count,
        };
        let productInCart = cart.find((i) => i.id === id);
        if (productInCart) {
            productInCart.qty = productInCart.qty + count;
        } else {
            setCart([...cart, newProduct]);
        }
    };

    const cleanCart = () => {
        setCart([]);
    };

    const deleteProduct = (id) => {
        const filterCart = cart.filter((e) => e.id !== id);
        setCart(filterCart);
    };

    const values = { addProduct, deleteProduct, cleanCart, cart };

    return (
        <CartContext.Provider value={values}>{children}</CartContext.Provider>
    );
};
