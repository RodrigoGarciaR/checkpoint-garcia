import React, { useContext } from 'react';
import { IoCartOutline } from 'react-icons/io5';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';

const CartWidget = () => {
    const { cart } = useContext(CartContext);

    let itemsInCart = cart.reduce((acc, el) => acc + el.qty, 0);

    return (
        <>
            {cart.length === 0 ? (
                <></>
            ) : (
                <>
                    <Link to="/cart">
                        <li className="pl-5 pr-1 text-xl">
                            <IoCartOutline />
                        </li>
                    </Link>
                    <Link to="/cart">
                        <li className="pr-5">{itemsInCart}</li>
                    </Link>
                </>
            )}
        </>
    );
};

export default CartWidget;
