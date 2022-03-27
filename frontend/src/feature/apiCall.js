import { loginStart, loginFail, userLogin } from './userSlice'
import axios from 'axios'


export const registerUser = async (dispatch, user) => {
    dispatch(loginStart());
    try{
        const res = await axios.post('http://localhost:8080/api/v1/auth/login_user', user)
        dispatch(userLogin(res.data))
    }catch(err){
        dispatch(loginFail())
        console.log(err)
    }
}