import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import formatCurrency from '../utils/formatCurrency'
import './Products.css'

const Products = () => {

  const dispatch = useDispatch()
  const products = useSelector(state => state.products)
  const cartProducts = useSelector(state => state.cartProducts)

  const addToCart = product => {
    let alreadInCart = false
    const newCartProducts = [...cartProducts]

    newCartProducts.forEach(item => {
      if (item.id === product.id) {
        alreadInCart = true
        item.amount++
      }
    })

    if (!alreadInCart) {
      newCartProducts.push({ ...product, amount: 1 })
    }

    dispatch({ type: 'update_shopping_cart', payload: newCartProducts })

    localStorage.setItem('cartProducts', JSON.stringify(newCartProducts))
  }

  useEffect(() => {
    dispatch({ type: 'get_products' })
  }, [])

  return (
    <div className='products'>
      <ul>
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
    </div>
  )
}

export default Products