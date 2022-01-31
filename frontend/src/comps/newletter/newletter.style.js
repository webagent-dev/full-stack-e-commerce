import styled from 'styled-components'

export const NewletterContainer = styled.div`
height: 60vh;
background: rgb(187, 140, 123);
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
font-family: monospace;
`
export const NewletterTitle = styled.h1`
font-size: 70px;
margin-bottom: 25px;
`
export const NewletterDesc = styled.p`
    font-weight: 24px;
    font-weight: 500;
    margin-bottom: 15px;
`
export const NewletterInputContainer = styled.div`
width: 50%;
height: 40px;
background: white;
display: flex;
align-items: center;

`
export const NewletterInput = styled.input`
flex: 8;
height: 100%;
border: none;
outline: none;
padding: 0 20px;
&::placeholder{
    text-transform: capitalize;
}
`
export const NewletterButton = styled.button`
height: 100%;
    flex: 1;
    background: green;
    border: none;
`