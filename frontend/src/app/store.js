import { configureStore  } from '@reduxjs/toolkit'
import cartSlice from '../feature/cartSlice'
import userSlice from '../feature/userSlice'

const store = configureStore({
    reducer:{
        cart: cartSlice,
        users: userSlice
    }
})


export default store