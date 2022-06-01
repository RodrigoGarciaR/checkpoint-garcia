import React, { useEffect, useState, useContext } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';
import { ItemsContext } from '../../context/ItemsContext';

const ItemDetailContainer = () => {
    const [items] = useContext(ItemsContext);
    const [product, setProduct] = useState({});

    let { itemId } = useParams();
    let idParse = parseInt(itemId);

    useEffect(() => {
        const data = new Promise((resolve, reject) => {
            const filterDetailProduct = items.filter(
                (product) => product.id === idParse
            );

            resolve(filterDetailProduct);
        });
        data.then((data) => {
            setProduct(data[0]);
        });
        data.catch((err) => {
            console.error(err);
        });
    }, [itemId]);

    return <ItemDetail product={product} />;
};

export default ItemDetailContainer;
