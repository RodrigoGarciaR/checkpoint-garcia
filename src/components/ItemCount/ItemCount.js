import React from 'react';
import './ItemCount.css';

const ItemCount = ({ count, onAdd, onChangeValue, minus, plus }) => {
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
