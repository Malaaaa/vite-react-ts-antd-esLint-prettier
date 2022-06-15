import { configureStore } from '@reduxjs/toolkit'
import productsReducer from './slice/products.slice'
import userReducer from './slice/user.slice'



export const store = configureStore({
    reducer: {
        products: productsReducer,
        user: userReducer,
    },

})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch