import React, { useContext, useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { ItemsContext } from "../../ItemsContext";

const ItemListContainer = () => {
    const [items] = useContext(ItemsContext);
    const [products, setProducts] = useState([]);

    const { category } = useParams();

    useEffect(() => {
        const data = new Promise((resolve, reject) => {
            const filterProducts = items.filter(
                (product) => product.category === category
            );

            if (category === undefined) {
                resolve(items.filter((product) => product.featured === true));
            } else if (category === "productos") {
                resolve(items);
            } else {
                resolve(filterProducts);
            }

            resolve(items);
        });
        data.then((data) => {
            setProducts(data);
        });
        data.catch((err) => {
            console.error(err);
        });
    }, [category]);

    return <ItemList products={products} />;
};

export default ItemListContainer;
