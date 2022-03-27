import { createSlice } from '@reduxjs/toolkit'

const userSlice = createSlice({
    name: 'users',
    initialState:{
        currentUser: null,
        isFetching: false,
        isError: false
    },
    reducers:{
        loginStart: (state) => {
                state.isFetching = true;
                state.currentUser = null;
                state.isError = false
        },
        userLogin: (state, action) => {
                state.isFetching = false;
                state.currentUser = action.payload;
                state.isError = false;
        },
        loginFail: (state, action) => {
            state.isFetching = false;
            state.currentUser = null;
            state.isError = true
        }
    }
})


export const { loginStart, userLogin, loginFail } = userSlice.actions

export const getFetchingState = state => state.users.isFetching
export const getErrorState = state => state.users.isError
export const user = state => state.users.currentUser


export default userSlice.reducer