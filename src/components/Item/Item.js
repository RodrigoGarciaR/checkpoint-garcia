import './Item.css';
import { Link } from 'react-router-dom';

const Item = ({ product }) => {
    const { id, name, price, img, stock, category } = product;

    return (
        <div className="itemCard">
            <Link to={`/item/${product.id}`}>
                <div className="mt-5">
                    <div
                        className={
                            'hexagon ' +
                            (category === 'Xbox'
                                ? 'xboxBackground'
                                : category === 'PlayStation'
                                ? 'playstationBackground'
                                : category === 'Nintendo'
                                ? 'nintendoBackgroud'
                                : null)
                        }
                    ></div>
                    <img src={img} alt={id} className="imgCard" />
                    <p className="text-center">{name}</p>
                    <p className="text-center">$ {price} MXN</p>
                    <p className="mb-10">Stock: {stock}</p>
                </div>
            </Link>
        </div>
    );
};

export default Item;
