import React from 'react'
import ItemCount from './ItemCount.js'
import './Item.css'

const Item = ({product}) => {
    const {id, name, price, img, stock} = product
  return (
    
      <div className='text-center rounded shadow-lg shadow-black'>
        <div className='mt-5'>
          <img src={img} className='max-w-xs m-auto max-h-36' />
          <p className='text-center'>{name}</p>
          <p className='text-center'>$ {price}</p>
        </div>
        <div>
          <ItemCount stock={stock} />
        </div>
        <div className='mb-5'>
          <button className='addCart'>Agregar al Carrito</button>
          </div>
      </div>
    
  )
}

export default Item