import styled from 'styled-components'
export const CartContainer = styled.div`
width: 100vw;
height: 75vh;
margin-top: 1rem;
padding: 20px;
 font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
`
export const CartWrapper = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
` 
export const Head = styled.h1`
text-align: center;
font-size: 35px;
font-weight: 200!important;
margin-bottom: 1rem;
` 
export const Button = styled.button`
    padding: 10px 15px;
    border: none;
    outline: none;
    background: ${props => props.bg === 'black' ? 'black' : 'lightgray'};
    color: ${props => props.text === 'white' ? 'white' : 'black'};
    font-weight: 700;
    border-radius: 5px;
    border: 2px solid black;
` 
export const Title = styled.div`` 
export const Content = styled.div`
display: flex;
gap: 1rem;
` 
export const CartContent = styled.div`` 
export const Summary = styled.div``
Text = styled.div``
export const Underline = styled.p`
  text-decoration: underline;
    text-transform: capitalize;
    font-weight: 700;

`