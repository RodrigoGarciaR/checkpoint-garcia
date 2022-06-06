import React from 'react';
import Item from '../Item/Item';

const ItemList = ({ products }) => {
    return (
        <div className="grid mx-10 mt-5 md:grid-cols-2 xl:grid-cols-4 gap-y-10 gap-x-5 justify-items-center">
            {products.map((product) => {
                return <Item key={product.id} product={product} />;
            })}
        </div>
    );
};

export default ItemList;
