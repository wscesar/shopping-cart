import { useState, useEffect } from 'react'
import './Products.css'

const Products = props => {
  const { products } = props
  return (
    <ul className='products'>
      {
        products.map(product => {
          return (
            <li key={product.id}>
              <img src={product.image} alt={product.title}/>
              <span className='title'>{product.title}</span>
              <span className='price'>
                <span>{product.price}</span>
                <button>Add to cart</button>
              </span>
            </li>
          )
        })
      }
    </ul>
  )
}

export default Products