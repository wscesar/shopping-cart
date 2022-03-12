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

  const orderProducts = () => {}
  const filterProducts = () => {}

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
        <Products products={products} />
        <aside></aside>
      </main>
      <Footer />
    </>
  );
}

export default App;
