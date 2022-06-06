import React, { useEffect, useState } from 'react';
import ItemList from '../../ItemList/ItemList';
import { collection, query, getDocs, where } from 'firebase/firestore';
import { db } from '../../../Firebase/Firebase';
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {
    const [products, setProducts] = useState([]);

    let { category } = useParams();

    useEffect(() => {
        const getProducts = async () => {
            const q = query(
                collection(db, 'products'),
                where('category', '==', category)
            );
            const docs = [];
            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {
                docs.push({ ...doc.data(), id: doc.id });
            });
            setProducts(docs);
        };
        getProducts();
    }, [category]);

    return <ItemList products={products} />;
};

export default ItemListContainer;
