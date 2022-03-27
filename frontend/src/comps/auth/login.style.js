import style from 'styled-components'


export const LoginContainer = style.div`
    width: 100%;
    height: 100vh;
    background: url('/assets/pro-4.jpg');
    background-size: cover;
    // background-position: top;
    background-repeat: no-repeat;
    display: flex;
    align-items: center;
    justify-content: center;
`
export const Wrapper = style.div`
    max-width: 60%;
    max-height: 60%;
    background: white;
    padding: 20px;
    box-shadow: inset -6px -6px -12px, inset 6px 6px 12px black;
    border-radius: 3px;
`
export const Title = style.div`
    padding: 10px;
    font-weight: 700;
    font-size: 30px;
    font-family: monospace;
`
export const InputWrapper = style.form`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 1rem;
    border-radius: 5px;
    font-family: monospace;
    flex-direction: column;

        @media(max-width:745px){
        width: auto;
        height: auto;
    }

`
export const Input = style.input`
flex: 1;
    padding: 10px;
    margin-bottom: 1rem;
border: none;
outline: none;
border: 1px solid gray;
border-radius: 3px;
    &::placeholder{
        font-family: cursive;
        color: lightgray;
    }
`
export const Span = style.div`
 font-size: 15px;
 display: inline;
 text-transform: uppercase;
  text-decoration: underline;
`
export const Text = style.p`
    font-size: 12px;
    font-weight: 700;
    text-transform: uppercase;
   margin-bottom: 10px;
    text-decoration: underline;
`
export const Send = style.button`
    padding: 8px 35px;
    margin-top: 10px;
    margin-bottom: 5px;
    background: teal;
    border: none;
    outline: none;
    border-radius: 3px;
    color: white;
    font-size: 12px;
    cursor: pointer;


` 