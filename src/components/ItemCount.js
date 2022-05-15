import React, { useState } from "react";
import "./ItemCount.css";

const ItemCount = ({ stock }) => {
    const [count, setCount] = useState(0);

    const plus = () => {
        count < stock ? setCount(count + 1) : setCount(count);
    };

    const minus = () => {
        count > 0 ? setCount(count - 1) : setCount(count);
    };

    const onAdd = () => {
        alert(`Agregamos ${count} productos al carrito`);
    };

    return (
        <>
            <button className="buttonCounter" onClick={minus}>
                -
            </button>
            <input type="tel" className="counter" value={count}></input>
            <button className="buttonCounter" onClick={plus}>
                +
            </button>

            <div className="mb-5 text-center">
                <button className="addCart" onClick={onAdd}>
                    Agregar al carrito
                </button>
            </div>
        </>
    );
};

export default ItemCount;
