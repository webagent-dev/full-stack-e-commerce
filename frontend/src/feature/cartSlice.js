import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        quantity: 0,
          total: 0,
        product: [],
    },
    reducers:{
            addProduct:(state, action) => {
                state.quantity += 1;
                state.product.push(action.payload);
            state.total += action.payload.price 
            }
    }
})

export const { addProduct }  = cartSlice.actions

export const getProduct = state => state.cart.product
export const getQuantity = state => state.cart.quantity
export const getTotal = state => state.cart.total


export default cartSlice.reducer