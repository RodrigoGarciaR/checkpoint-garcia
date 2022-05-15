import React, { useEffect, useState } from "react";
import productList from "../produtList.json";
import ItemDetail from "./ItemDetail.js";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
    const [product, setProduct] = useState({});

    let { itemId } = useParams();

    useEffect(() => {
        const data = new Promise((resolve, reject) => {
            const filterDetailProduct = productList.filter(
                (product) => product.id == itemId
            );
            setTimeout(() => {
                resolve(filterDetailProduct);
            }, 2000);
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
