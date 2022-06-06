import React, { useEffect, useState } from 'react';
import ItemList from '../../ItemList/ItemList';

import { collection, query, getDocs } from 'firebase/firestore';
import { db } from '../../../Firebase/Firebase';

const ItemListContainer = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const getProducts = async () => {
            const q = query(collection(db, 'products'));
            const docs = [];
            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {
                docs.push({ ...doc.data(), id: doc.id });
            });
            setProducts(docs);
        };
        getProducts();
    }, []);

    return <ItemList products={products} />;
};

export default ItemListContainer;
