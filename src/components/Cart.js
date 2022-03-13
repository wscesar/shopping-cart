import formatCurrency from '../utils/formatCurrency'
import './Cart.css'

const Cart = props => {
  const { cartItems, removeFromCart } = props
  return (
    <aside>
      {cartItems.length <= 0 && <div>Cart is empty</div>}
      {cartItems.length > 0 && <div>{cartItems.length} items in the cart</div>}
      <hr></hr>
      <ul className='cart-items'>
        {
          cartItems.map(item => {
            return (
              <li key={item.id}>

                <img src={item.image} alt={item.title} />
                <span className="text">
                  <span className='title'>{item.title}</span>
                  <span> Amount: {item.amount}</span>
                  <span>Price: {formatCurrency(item.price)}</span>
                  <span>Subtotal: {formatCurrency(item.price * item.amount)}</span>
                  <button onClick={() => { removeFromCart(item) }}>Remove</button>
                </span>
              </li>
            )
          })
        }
      </ul>
    </aside>
  )
}

export default Cart