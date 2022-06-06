import React, { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../../../Firebase/Firebase';

const Shop = () => {
    const initialState = {
        name: '',
        phone: '',
        mail: '',
    };

    const [values, setValues] = useState(initialState);

    const handleonChange = (e) => {
        const { value, name } = e.target;
        setValues({ ...values, [name]: value });
    };

    const onSubmit = async (e) => {
        e.preventDefault();

        const docRef = await addDoc(collection(db, 'orders'), {
            buyer: values,
        });
        console.log('Document written with ID: ', docRef.id);
    };

    return (
        <>
            <form
                className="flex flex-col p-20 mx-auto mt-10 border-2 border-black max-w-fit"
                onSubmit={onSubmit}
            >
                <input
                    className="px-10 py-2 my-5 border-2 border-gray hover:border-black active:border-black"
                    type="text"
                    placeholder="Nombre"
                    name="name"
                    value={values.name}
                    onChange={handleonChange}
                ></input>
                <input
                    className="px-10 py-2 my-5 border-2 border-gray hover:border-black active:border-black"
                    type="tel"
                    placeholder="Teléfono"
                    name="phone"
                    value={values.phone}
                    onChange={handleonChange}
                ></input>
                <input
                    className="px-10 py-2 my-5 border-2 border-gray hover:border-black active:border-black"
                    type="email"
                    placeholder="Correo electrónico"
                    name="mail"
                    value={values.mail}
                    onChange={handleonChange}
                ></input>
                <button className="m-2 px-3 bg-black rounded-[12px] shadow-red-400 shadow-sm text-white active:bg-red-600">
                    Finalizar compra
                </button>
            </form>
        </>
    );
};

export default Shop;
