import {LoginContainer, Wrapper, Title, InputWrapper,  Input, Span, Text, Send } from '../comps/auth/login.style'
import { registerUser } from '../feature/apiCall'
import { useDispatch } from 'react-redux'
import { useState } from 'react'
const Login = () => {
    const [username, setUsername ] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch()

    const handleChange=(e) => {
        e.preventDefault()
        registerUser(dispatch, {name:username, password})
    }
    return(
        <LoginContainer>
            <Wrapper>
                <Title>SignIn</Title>
                <InputWrapper >
                <Input  type='text' placeholder='Name'  onChange={(e) => setUsername(e.target.value)}/>
                <Input   type='text'  placeholder='Last Name'  onChange={(e) => setPassword(e.target.value)} />
                </InputWrapper>
                    <Send type='submit' onClick={handleChange}>LOGIN</Send>
                       <Text> Forget your password</Text>
                       <Span>Create new Acount</Span>
            </Wrapper>
        </LoginContainer>
    )
}

export default Login