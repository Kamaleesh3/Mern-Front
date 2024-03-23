import { configureStore , combineReducers} from '@reduxjs/toolkit'
import logger from 'redux-logger'
import productsReducer from './slices/productsSlice'
import productReducer from './slices/productSlice'
import authReducer from './slices/authSlice'
import cartReducer from './slices/CartSlice'
import orderReducer from './slices/orderSlice'
import userReducer from './slices/userSlice'

const rootReducer = combineReducers({
  prductsState : productsReducer,
  productState : productReducer,
  authState: authReducer,
  cartState: cartReducer,
  orderState : orderReducer,
  userState: userReducer
}) 

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
})

export default store;