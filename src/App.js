import { useState, useEffect } from 'react'
import Products from './components/Products';
import Header from './components/Header';
import Footer from './components/Footer';
import Cart from './components/Cart';
import data from './data.json'
import './App.css';

function App() {
  const [size, setSize] = useState('')
  const [order, setOrder] = useState('')
  const [products, setProducts] = useState(data.products)
  const [cartProducts, setCartProducts] = useState(
    JSON.parse(localStorage.getItem('cartProducts')) || []
  )

  const orderProducts = event => {
    setOrder(event.target.value)
    setProducts(
      products.sort((a, b) =>
        event.target.value === "lowest"
          ? a.price > b.price ? 1 : -1
          : a.price < b.price ? 1 : -1
      )
    )

  }

  const filterProducts = event => {
    setSize(event.target.value)

    if (event.target.value === 'ALL') {
      setProducts(data.products)
    } else {
      setProducts(
        products.filter(product => product.sizes.includes(event.target.value))
      )
    }
  }

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

    setCartProducts(newCartProducts)
    localStorage.setItem('cartProducts', JSON.stringify(newCartProducts))
  }

  const removeFromCart = product => {
    const newCartProducts = [...cartProducts]

    setCartProducts(
      newCartProducts.filter(item => item.id !== product.id)
    )

    localStorage.setItem('cartProducts', JSON.stringify(newCartProducts))
  }

  const checkout = () => {
    console.log('checkout') 
  }

  return (
    <>
      <Header
        orderProducts={orderProducts}
        filterProducts={filterProducts}
        count={products.length}
        order={order}
        size={size}
      />
      <main>
        {
          products.length === 0 &&
          <div className='not-found'>No items found!</div>
        }
        {
          products.length > 0 &&
          <>
            <Products
              products={products}
              addToCart={addToCart}
            />
            <Cart
              checkout={checkout}
              cartProducts={cartProducts}
              removeFromCart={removeFromCart}
            />
          </>
        }
      </main>
      <Footer />
    </>
  );
}

export default App;
