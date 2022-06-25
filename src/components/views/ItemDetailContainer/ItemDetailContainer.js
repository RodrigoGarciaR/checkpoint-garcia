import React, { useEffect, useState } from 'react';
import ItemDetail from '../../ItemDetail/ItemDetail';
import { Link, useParams } from 'react-router-dom';
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
    }, [itemId]);

    return (
        <>
            {product === undefined ? (
                <div className="my-20">
                    <h2 className="text-center text-7xl"> Error 404</h2>
                    <p className="text-4xl text-center">
                        Este producto no existe.
                    </p>
                    <Link to="/">
                        <p className="p-5 mx-auto mt-10 rounded-[12px] bg-black text-white text-center border-2 border-black max-w-fit shadow-sm shadow-red-400 active:bg-red-600">
                            Regresar a la tienda
                        </p>
                    </Link>
                </div>
            ) : (
                <ItemDetail product={product} />
            )}
        </>
    );
};

export default ItemDetailContainer;
