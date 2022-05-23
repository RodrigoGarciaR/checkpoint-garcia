import React from "react";
import ItemCount from "../ItemCount/ItemCount";
import "./Item.css";
import { Link } from "react-router-dom";

const Item = ({ product }) => {
    const { name, price, img, stock } = product;
    return (
        <div className="text-center rounded shadow-lg shadow-black max-w-[303px]">
            <div className="mt-5">
                <Link to={`/item/${product.id}`}>
                    <img src={img} className="max-w-xs m-auto max-h-36" />
                    <p className="text-center">{name}</p>
                    <p className="text-center">$ {price} MXN</p>
                </Link>
            </div>
            <div>
                <ItemCount stock={stock} />
            </div>
        </div>
    );
};

export default Item;
