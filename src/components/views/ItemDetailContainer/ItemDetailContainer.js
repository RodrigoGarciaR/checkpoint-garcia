import React, { useEffect, useState } from 'react';
import ItemDetail from '../../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';
import {
    collection,
    query,
    getDocs,
    where,
    documentId,
} from 'firebase/firestore';
import { db } from '../../../Firebase/Firebase';

const ItemDetailContainer = () => {
    const [product, setProduct] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    let { itemId } = useParams();

    useEffect(() => {
        const getProducts = async () => {
            const q = query(
                collection(db, 'products'),
                where(documentId(), '==', itemId)
            );
            const docs = [];
            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {
                docs.push({ ...doc.data(), id: doc.id });
            });
            setProduct(docs[0]);
        };
        getProducts();
        setIsLoading(false);
    }, [itemId]);

    return (
        <>{isLoading ? <p>Cargando...</p> : <ItemDetail product={product} />}</>
    );
};

export default ItemDetailContainer;
