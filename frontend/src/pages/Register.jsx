import {RegisterContainer, Wrapper, Title, InputWrapper,  Input, Span, Text, Send } from '../comps/auth/register.style'
const Register = () => {
    return(
        <RegisterContainer>
            <Wrapper>
                <Title>Create An Account</Title>
                <InputWrapper>
                <Input  type='text' placeholder='name'/>
                <Input   type='text'  placeholder='last name'/>
                </InputWrapper>
                <InputWrapper>
                <Input   type='text'  placeholder='username'/>
                <Input   type='email'  placeholder='email'/>
                </InputWrapper>
                <InputWrapper>
                <Input    type='password' placeholder='password'/>
                <Input   type='password'  placeholder='confirm password' />
                </InputWrapper>
                <Text> By creating an account. I consent to the processing of my personal of my personal data in accordance with the <Span>PRIVACY POLICY</Span></Text>
                <Send>CREATE</Send>
            </Wrapper>
        </RegisterContainer>
    )
}

export default Register