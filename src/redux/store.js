import { configureStore } from '@reduxjs/toolkit'
import resturantSlice from './resturantSlice'
import CartSlice from './CartSlice'

export const store = configureStore({
    reducer: {
        resturant: resturantSlice,
        cart: CartSlice
    },
})