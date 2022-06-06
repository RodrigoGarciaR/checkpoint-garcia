import React, { useState, useContext } from 'react';
import ItemCount from '../ItemCount/ItemCount';
import './Item.css';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';

const Item = ({ product }) => {
    const { id, name, price, img, stock } = product;
    const [count, setCount] = useState(0);
    const { addProduct } = useContext(CartContext);

    const plus = () => {
        count < stock ? setCount(count + 1) : setCount(count);
    };

    const minus = () => {
        count > 0 ? setCount(count - 1) : setCount(count);
    };

    const onAdd = () => {
        if (count > stock) {
            alert(`¡No tenemos tanto stock! Solo contamos con ${stock} piezas`);
        } else if (count === 0) {
            alert(`El numero a agregar debe ser mayor a cero`);
        } else {
            alert(`Agregamos ${count} productos al carrito`);
        }
        addProduct(id, name, price, img, count);
    };

    const onChangeValue = (e) => {
        setCount(e.target.value);
    };

    return (
        <div className="px-5 text-center rounded shadow-lg shadow-black max-w-fit">
            <div className="mt-5">
                <Link to={`/item/${product.id}`}>
                    <img
                        src={img}
                        className="max-w-xs m-auto max-h-36"
                        alt={id}
                    />
                    <p className="text-center">{name}</p>
                    <p className="text-center">$ {price} MXN</p>
                    <p>Stock: {stock}</p>
                </Link>
            </div>
            <div>
                <ItemCount
                    stock={stock}
                    onAdd={onAdd}
                    count={count}
                    onChangeValue={onChangeValue}
                    minus={minus}
                    plus={plus}
                />
            </div>
        </div>
    );
};

export default Item;
