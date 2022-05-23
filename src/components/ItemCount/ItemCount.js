import React, { useState } from "react";
import "./ItemCount.css";

const ItemCount = ({ stock, count, onAdd, onChangeValue, minus, plus }) => {
    // const [count, setCount] = useState(0);

    // const plus = () => {
    //     count < stock ? setCount(count + 1) : setCount(count);
    // };

    // const minus = () => {
    //     count > 0 ? setCount(count - 1) : setCount(count);
    // };

    // const onAdd = () => {
    //     if (count > stock) {
    //         alert(`¡No tenemos tanto stock! Solo contamos con ${stock} piezas`);
    //     } else if (count === 0) {
    //         alert(`El numero a agregar debe ser mayor a cero`);
    //     } else {
    //         alert(`Agregamos ${count} productos al carrito`);
    //     }
    // };

    // const onChangeValue = (e) => {
    //     setCount(e.target.value);
    // };

    return (
        <>
            <button className="buttonCounter" onClick={minus}>
                -
            </button>
            <input
                type="tel"
                className="counter"
                value={count}
                onChange={onChangeValue}
            ></input>
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
