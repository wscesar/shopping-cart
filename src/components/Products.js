import { useState, useEffect } from 'react'
import './Products.css'

const Products = props => {
  const { products } = props
  return (
    <ul className="products">
      {
        products.map(product => {
          return (
            <li key={product.id}>
              <img src={product.image} alt={product.title}/>
              <span className="product-name">{product.title}</span>
              <span className="product-price">{product.price}</span>
              <button className="add-to-cart">Add to cart</button>
            </li>
          )
        })
      }
    </ul>
  )
}

export default Products