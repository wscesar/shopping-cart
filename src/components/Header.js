import { useState, useEffect } from 'react'
import './Header.css'


const Header = props => {
  const sizeList = ['ALL', 'XS', 'S', 'M', 'L', 'XL']
  const orderList = ['lowest', 'highest']
  const { count, order, size, orderProducts, filterProducts } = props

  return (
    <header>
      <h1>React Shopping Cart</h1>
      <div className='filters'>
        <span className='results'>{count} Products</span>

        <label>
          <span>Order by</span>
          <select value={order} onChange={orderProducts}>
            <option disabled={order}>Select</option>
            {
              orderList.map(
                value => <option key={value} value={value}>{value} price</option>
              )
            }
          </select>
        </label>

        <label>
          <span>Size</span>
          <select value={size} onChange={filterProducts}>
            {
              sizeList.map(
                size => <option key={size} value={size}>{size}</option>
              )
            }
          </select>
        </label>

      </div>
    </header>
  )
}

export default Header
