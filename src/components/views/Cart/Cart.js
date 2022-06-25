import React, { useContext } from 'react';
import './Cart.css';
import { CartContext } from '../../../context/CartContext';
import { Link } from 'react-router-dom';

const Cart = () => {
    const { cart, deleteProduct, cleanCart } = useContext(CartContext);

    return (
        <>
            {cart.length === 0 ? (
                <div className="my-20">
                    <h2 className="text-3xl text-center">
                        Tu carrito está vacío
                    </h2>
                    <Link to="/">
                        <p className="p-5 mx-auto mt-10 rounded-[12px] bg-black text-white text-center border-2 border-black max-w-fit shadow-sm shadow-red-400 active:bg-red-600">
                            Regresar a la tienda
                        </p>
                    </Link>
                </div>
            ) : (
                <>
                    {cart.map((product) => {
                        return (
                            <div key={product.id} className="flex mt-20 ml-10">
                                <span className="min-w-[400px]">
                                    <img
                                        src={product.img}
                                        alt={product.name}
                                        className="max-h-60"
                                    />
                                </span>
                                <div className="ml-10">
                                    <p>{product.name}</p>
                                    <p>Precio unitario: ${product.price}</p>
                                    <p>Piezas: {product.qty}</p>
                                    <p>Total: $ {product.price * product.qty}</p>
                                    <button
                                        className="buttonCounter"
                                        onClick={() =>
                                            deleteProduct(product.id)
                                        }
                                    >
                                        Eliminar producto
                                    </button>
                                </div>
                            </div>
                        );
                    })}
                    <div className="my-20 text-center">
                        <p className="text-2xl">
                            Total: ${' '}
                            {cart.reduce(
                                (acc, el) => acc + el.price * el.qty,
                                0
                            )}
                        </p>
                        <button className="buttonCounter" onClick={cleanCart}>
                            Vaciar carrito
                        </button>
                        <Link to="/checkout">
                            <button className="buttonCounter">
                                Finalizar la compra
                            </button>
                        </Link>
                    </div>
                </>
            )}
        </>
    );
};

export default Cart;
