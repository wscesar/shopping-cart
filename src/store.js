import data from './data.json'
import { createStore } from 'redux'

const initialState = {
  products: [],
  cartProducts: JSON.parse(localStorage.getItem('cartProducts')) || []
}

const reducer = (state = initialState, action) => {

  switch (action.type) {
    case 'get_products':
      return { ...state, products: data.products }

    case 'update_products':
      return { ...state, products: action.payload }

    case 'update_shopping_cart':
      return { ...state, cartProducts: action.payload }

    default: return state
  }

}

const reduxStore = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default reduxStore
