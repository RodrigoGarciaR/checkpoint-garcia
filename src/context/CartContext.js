import React, { createContext, useState } from 'react';

export const CartContext = createContext();

const initialCart = [];

JSON.parse(localStorage.getItem('cart'))
    ? JSON.parse(localStorage.getItem('cart')).forEach((e) =>
          initialCart.push(e)
      )
    : localStorage.setItem('cart', JSON.stringify([]));

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
            localStorage.setItem('cart', JSON.stringify([...cart, newProduct]));
        }
    };

    const cleanCart = () => {
        setCart([]);
        localStorage.setItem('cart', JSON.stringify([]));
    };

    const deleteProduct = (id) => {
        let productToDelete = JSON.parse(localStorage.getItem('cart'));
        let productIndex = productToDelete.findIndex((e) => e.id === id);
        productToDelete.splice(productIndex, 1);
        localStorage.setItem('cart', JSON.stringify(productToDelete));
        const filterCart = cart.filter((e) => e.id !== id);
        setCart(filterCart);
    };

    const values = { addProduct, deleteProduct, cleanCart, cart };

    return (
        <CartContext.Provider value={values}>{children}</CartContext.Provider>
    );
};
