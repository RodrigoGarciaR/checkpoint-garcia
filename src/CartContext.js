import React, { createContext, useState } from "react";

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

            console.log(cart);
        } else {
            initialCart.push(newProduct);
            setCart(initialCart);

            console.log(cart);
        }
    };

    return (
        <CartContext.Provider value={[addProduct]}>
            {children}
        </CartContext.Provider>
    );
};
