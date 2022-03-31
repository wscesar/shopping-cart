import { useDispatch, useSelector } from 'react-redux'
import formatCurrency from '../utils/formatCurrency'
import './Cart.css'

const Cart = () => {
  const dispatch = useDispatch()
  const cartProducts = useSelector(state => state.cartProducts)

  let headerDescription = ' empty'

  if (cartProducts.length === 1) {
    headerDescription = ` ${cartProducts.length} item`
  }
  else if (cartProducts.length > 1) {
    headerDescription = ` ${cartProducts.length} items`;
  }

  const checkout = () => {
    console.log('checkout')
  }

  const removeFromCart = product => {
    const newCartProducts = [...cartProducts].filter(item => item.id !== product.id)

    dispatch({ type: 'update_shopping_cart', payload: newCartProducts })

    localStorage.setItem('cartProducts', JSON.stringify(newCartProducts))
  }


  return (
    <aside>
      <p className="cart-header">Shopping Cart: {headerDescription}</p>

      <ul className='cart-items'>
        {
          cartProducts.map(product => {
            return (
              <li key={product.id}>
                <img src={product.image} alt={product.title} />
                <span className="text">
                  <span className='title'>{product.title}</span>
                  <span>Amount: {product.amount}</span>
                  <span>Price: {formatCurrency(product.price)}</span>
                  <span>Subtotal: {formatCurrency(product.price * product.amount)}</span>
                  <button onClick={() => removeFromCart(product)}>Remove</button>
                </span>
              </li>
            )
          })
        }
      </ul>

      {
        cartProducts.length > 0 &&
        <div className='cart-total'>
          Total: {
            formatCurrency(
              cartProducts.reduce(
                (total, product) => total + product.price * product.amount, 0
              )
            )
          }
          <button onClick={checkout}>Checkout</button>
        </div>
      }
    </aside>
  )
}

export default Cart