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
width: 60%;
height: 60%;
    background: white;
    padding: 20px;
    box-shadow: inset -6px -6px -12px, inset 6px 6px 12px black;
    border-radius: 3px;

    @media(max-width:745px){
        width: auto;
        height: auto;
    }
`
export const Title = style.div`
    padding: 10px;
    font-weight: 700;
    font-size: 30px;
    font-family: monospace;

        @media(max-width:745px){
     font-size: 20px;
     text-align: center;
    }
`
export const InputWrapper = style.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 1rem;
    border-radius: 5px;
 

        @media(max-width:745px){

            gap: .5rem;
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

            @media(max-width:745px){
                    width: auto;
    }
`
export const Span = style.div`
 font-size: 15px;
 display: inline;
`
export const Text = style.p`
    font-size: 12px;
    font-weight: 700;
`
export const Send = style.button`
    padding: 8px 35px;
    margin-top: 20px;
    background: teal;
    border: none;
    outline: none;
    border-radius: 3px;
    color: white;
    font-size: 12px;
    cursor: pointer;

            @media(max-width:745px){
           margin-top: 10px;
    }
` 