import { useState, useEffect } from 'react'
import Products from './components/Products';
import data from './data.json'
import './App.css';

function App() {
  const [products, setProducts] = useState(data.products)

  return (
    <div className="grid-container">
      <header>
        <a href="/">React Shopping Cart</a>
      </header>

      <main>
        <Products products={products} />
      </main>

      <footer>
        All rights reserved.
      </footer>
    </div>
  );
}

export default App;
