import {LoginContainer, Wrapper, Title, InputWrapper,  Input, Span, Text, Send } from '../comps/auth/login.style'
const Login = () => {
    return(
        <LoginContainer>
            <Wrapper>
                <Title>SignIn</Title>
                <InputWrapper>
                <Input  type='text' placeholder='name'/>
                <Input   type='text'  placeholder='last name'/>
                </InputWrapper>
                <Send type='submit'>LOGIN</Send>
                       <Text> Forget your password</Text>
                       <Span>Create new Acount</Span>
            </Wrapper>
        </LoginContainer>
    )
}

export default Login