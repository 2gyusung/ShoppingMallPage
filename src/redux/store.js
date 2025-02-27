import {applyMiddleware, } from 'redux'
import rootReducer from "./reducers/index"
import { thunk } from 'redux-thunk'
import { configureStore } from '@reduxjs/toolkit'
import authenciateReducer from './reducers/authenticateReducer'
import productReducer from "./productReducer";

let store = configureStore({
  reducer: {
    auth : authenciateReducer,
  product : productReducer
  }
})

export default store