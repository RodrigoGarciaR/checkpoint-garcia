import React from "react";
import ItemCount from "./ItemCount";

const ItemDetail = ({ product }) => {
    let { img, name, price, stock } = product;

    return (
        <div className="flex justify-around mt-10">
            <img src={img} alt="Nintendo Switch 1.1" className="max-h-96" />
            <div className="text-center">
                <h4>{name}</h4>
                <p>Stock: {stock}</p>
                <p>{price}</p>
                <ItemCount stock={stock} />
            </div>
        </div>
    );
};

export default ItemDetail;
