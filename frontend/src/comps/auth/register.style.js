import style from 'styled-components'


export const RegisterContainer = style.div`
    width: 100%;
    height: 100vh;
    background: url('/assets/reg.png');
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    display: flex;
    align-items: center;
    justify-content: center;
`
export const Wrapper = style.div`
    width: 500px;
    height: 350px;
    background: white;
    padding: 20px;
`
export const Title = style.div`
    padding: 10px;
    font-weight: 700;
    font-size: 30px;
    font-family: monospace;
`
export const InputWrapper = style.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    border-radius: 5px;
`
export const Input = style.input`
flex: 1;
    padding: 10px;
    margin-bottom: 1rem;

    &::placeholder{
        font-family: cursive;
        color: lightgray;
    }
`
export const Span = style.div`
 font-size: 15px;
 font-family: monospace;
`
export const Text = style.p`
    font-size: 12px;
    font-weight: 700;
`
export const Send = style.div`` 