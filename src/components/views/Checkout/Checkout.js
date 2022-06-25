import React, { useState, useContext } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../../../Firebase/Firebase';
import { CartContext } from '../../../context/CartContext';

const Shop = () => {
    const { cart } = useContext(CartContext);

    const initialState = {
        name: '',
        lastName: '',
        phone: '',
        mail: '',
    };

    const [values, setValues] = useState(initialState);
    const [orderID, setOrderID] = useState('');

    const handleonChange = (e) => {
        const { value, name } = e.target;
        setValues({ ...values, [name]: value });
    };

    const onSubmit = async (e) => {
        e.preventDefault();

        let totalPrice = cart.reduce((acc, el) => acc + el.qty * el.price, 0);
        let date = new Date();

        const docRef = await addDoc(collection(db, 'orders'), {
            buyer: values,
            items: cart,
            date: date.toLocaleDateString(),
            total: totalPrice,
        });
        console.log('Document written with ID: ', docRef.id);
        setOrderID(docRef.id);
    };

    return (
        <div className="my-20">
            <h2 className="text-center text-7xl">Checkout</h2>
            <p className="text-4xl text-center">
                Ingresa tus datos para procesar tu compra
            </p>
            <form
                className="flex flex-col p-20 mx-auto my-20 border-2 border-black max-w-fit"
                onSubmit={onSubmit}
            >
                <input
                    className="px-10 py-2 my-5 border-2 border-gray hover:border-black active:border-black"
                    type="text"
                    placeholder="Nombre"
                    name="name"
                    value={values.name}
                    onChange={handleonChange}
                    required
                ></input>
                <input
                    className="px-10 py-2 my-5 border-2 border-gray hover:border-black active:border-black"
                    type="text"
                    placeholder="Apellido"
                    name="lastName"
                    value={values.lastName}
                    onChange={handleonChange}
                    required
                ></input>
                <input
                    className="px-10 py-2 my-5 border-2 border-gray hover:border-black active:border-black"
                    type="tel"
                    placeholder="Teléfono"
                    name="phone"
                    value={values.phone}
                    onChange={handleonChange}
                    required
                ></input>
                <input
                    className="px-10 py-2 my-5 border-2 border-gray hover:border-black active:border-black"
                    type="email"
                    placeholder="Correo electrónico"
                    name="mail"
                    value={values.mail}
                    onChange={handleonChange}
                    required
                ></input>
                <button className="m-2 px-3 bg-black rounded-[12px] shadow-red-400 shadow-sm text-white active:bg-red-600">
                    Finalizar compra
                </button>
            </form>
            {orderID && (
                <div className="px-10 py-5 mx-auto mt-10 font-semibold text-center text-white bg-green-600 w-fit">
                    Muchas gracias por tu compra, tu número de orden es:{' '}
                    {orderID}
                </div>
            )}
        </div>
    );
};

export default Shop;
