import { Provider } from 'react-redux'
import Products from './components/Products'
import Header from './components/Header'
import Footer from './components/Footer'
import Cart from './components/Cart'
import store from './store'
import './App.css'

const App = () => (
  <Provider store={store}>
    <Header />
    <main>
      <Products />
      <Cart />
    </main>
    <Footer />
  </Provider>
)

export default App
