import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import reducer from './reducers'

const middleware = [...getDefaultMiddleware()]
const store = configureStore({ reducer, middleware })

export default store