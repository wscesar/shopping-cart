import { useState, useEffect } from 'react'
import Products from './components/Products';
import Header from './components/Header';
import Footer from './components/Footer';
import data from './data.json'
import './App.css';

function App() {
  const [size, setSize] = useState('')
  const [order, setOrder] = useState('')
  const [products, setProducts] = useState(data.products)

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
          products.length
            ? <><Products products={products} /> <aside></aside></>
            : <div className='not-found'>No items found!</div>
        }
        
      </main>
      <Footer />
    </>
  );
}

export default App;
