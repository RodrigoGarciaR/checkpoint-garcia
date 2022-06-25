import React, { useEffect, useState } from 'react';
import ItemList from '../../ItemList/ItemList';
import { collection, query, getDocs, where } from 'firebase/firestore';
import { db } from '../../../Firebase/Firebase';

const ItemListContainer = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const getProducts = async () => {
            const q = query(
                collection(db, 'products'),
                where('featured', '==', true)
            );
            const docs = [];
            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {
                docs.push({ ...doc.data(), id: doc.id });
            });
            setProducts(docs);
        };
        getProducts();
    }, []);

    return (
        <>
            <img
                src="https://firebasestorage.googleapis.com/v0/b/checkpoint-garcia.appspot.com/o/hero.png?alt=media&token=58917aac-c9d6-4673-a57e-da57cbaa0c4a"
                className="w-full m-auto"
                alt="Checkpoint Solo Gamers"
            />

            <div className="max-w-[1920px] mx-auto my-20">
                <h2 className="pl-10 text-4xl fontRusso">
                    Top <span className="text-secondary">Games</span>
                </h2>
                <ItemList products={products} />
            </div>
        </>
    );
};

export default ItemListContainer;
