import { useDispatch, useSelector } from 'react-redux'
import { useState, useEffect } from 'react'
import './Header.css'


const Header = () => {
  const dispatch = useDispatch()
  const sizeList = ['ALL', 'XS', 'S', 'M', 'L', 'XL']
  const orderList = ['lowest', 'highest']
  
  const [size, setSize] = useState('ALL')
  const [order, setOrder] = useState('')
  const [allProducts, setAllProducts] = useState([])
  
  const products = useSelector(state => state.products)

  const orderProducts = event => {
    setOrder(event.target.value)

    const sortedProducts = [...products].sort((a, b) =>
      event.target.value === "lowest"
        ? a.price > b.price ? 1 : -1
        : a.price < b.price ? 1 : -1
    )

    dispatch({
      type: 'update_products',
      payload: sortedProducts
    })
  }

  const filterProducts = event => {
    setSize(event.target.value)

    const newProductList = allProducts.filter(p => p.sizes.includes(event.target.value))

    if (event.target.value === 'ALL') {
      dispatch({ type: 'get_products' })
    } else {
      dispatch({
        type: 'update_products',
        payload: newProductList
      })
    }
  }

  useEffect(() => {
    if (!allProducts.length) {
      setAllProducts([...products])
    }
  }, [products])

  return (
    <header>
      <h1>React Shopping Cart</h1>
      <div className='filters'>
        <span className='results'>{products.length} Products</span>

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
