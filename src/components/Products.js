import { useState, useEffect } from 'react'
import './Products.css'
import formatCurrency from '../utils/formatCurrency'

const Products = props => {
  const { products, addToCart } = props
  return (
    <ul className='products'>
      {
        products.map(product => {
          return (
            <li key={product.id}>
              <img src={product.image} alt={product.title} />
              <span className='title'>{product.title}</span>
              <span className='price'>
                <span>{formatCurrency(product.price)}</span>
                <button onClick={() => { addToCart(product) }}>Add to cart</button>
              </span>
            </li>
          )
        })
      }
    </ul>
  )
}

export default Products