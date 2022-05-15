import { useEffect, useState } from "react";
import productList from "../produtList.json";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
    const [products, setProducts] = useState([]);

    const { category } = useParams();

    useEffect(() => {
        const data = new Promise((resolve, reject) => {
            const filterProducts = productList.filter(
                (product) => product.category === category
            );

            setTimeout(() => {
                if (category === undefined) {
                    resolve(
                        productList.filter(
                            (product) => product.featured === true
                        )
                    );
                } else if (category === "productos") {
                    resolve(productList);
                } else {
                    resolve(filterProducts);
                }

                resolve(productList);
            }, 2000);
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
