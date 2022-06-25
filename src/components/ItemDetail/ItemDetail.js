import React, { useContext, useState } from 'react';
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';

const ItemDetail = ({ product }) => {
    let { id, img, name, price, stock, description } = product;

    const [count, setCount] = useState(0);
    const [addcart, setAddcart] = useState(true);
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
            setAddcart(false);
        }
    };

    const onChangeValue = (e) => {
        setCount(e.target.value);
    };

    return (
        <div className="flex justify-around my-20">
            <img src={img} alt={name} className="max-h-96" />
            <div className="text-center">
                <h4 className="mb-10 font-bold">{name}</h4>
                <p>
                    <span className="font-bold">Stock:</span> {stock}
                </p>
                <p>$ {price} MXN</p>
                <p className="max-w-xs my-10">
                    <span className="font-bold">Descrpción:</span> {description}
                </p>
                {addcart ? (
                    <ItemCount
                        stock={stock}
                        onAdd={onAdd}
                        count={count}
                        onChangeValue={onChangeValue}
                        minus={minus}
                        plus={plus}
                    />
                ) : (
                    <>
                        <Link to="/cart">
                            <button
                                className="m-2 px-3 bg-black rounded-[12px] shadow-red-400 shadow-sm text-white active:bg-red-600"
                                onClick={() => {
                                    addProduct(id, name, price, img, count);
                                }}
                            >
                                Ir al Carrito
                            </button>
                        </Link>
                        <button
                            className="m-2 px-3 bg-black rounded-[12px] shadow-red-400 shadow-sm text-white active:bg-red-600"
                            onClick={() => {
                                addProduct(id, name, price, img, count);
                                setAddcart(true);
                            }}
                        >
                            Seguir comprando
                        </button>
                    </>
                )}
            </div>
        </div>
    );
};

export default ItemDetail;
