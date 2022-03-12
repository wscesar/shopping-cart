import { useState, useEffect } from 'react'
import Products from './components/Products';
import Header from './components/Header';
import Footer from './components/Footer';
import data from './data.json'
import './App.css';

function App() {
  const [products, setProducts] = useState(data.products)

  return (
    <div className='grid-container'>
      <Header />
      <main>
        <Products products={products} />
        <aside></aside>
      </main>
      <Footer />
    </div>
  );
}

export default App;
