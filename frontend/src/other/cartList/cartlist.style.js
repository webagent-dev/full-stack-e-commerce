import styled from 'styled-components'

export const CartListContainer = styled.div`
width: 100%;
height: 150px;
padding: 20px;
display: flex;
gap: 1rem;
border-bottom: 1px solid lightgray;
/* align-items: center; */
`


export const Image = styled.image`
    width: 100%;
    height:  85%;
background: gray;
    background: gray;
flex: 1;
`
export const Content = styled.div`
    flex: 3;
    display: flex;
    /* align-items: center; */
    justify-content: space-between;
   
` 
export const Detail = styled.div`
display: flex;
gap: 1rem;
flex-direction: column;

` 
export const Wrapper = styled.div`
display: flex;
gap: .5rem;
align-items: center;
` 
export const Title = styled.div`
font-weight: 700;
font-size: 20px;
font-family: monospace;
` 
export const Value = styled.div`
font-family: cursive;
color: gray;
` 
export const Color = styled.div`
width: 20px;
height: 20px;
border: black;
background: red;
border-radius: 50%;
` 
export const Other = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    align-items: center;
    margin-right: 30px;
` 
export const Counter = styled.div`
display: flex;
gap: 1rem;
align-items: center;
` 
export const Price = styled.div`
    font-weight: 700;
    font-size: 35px;
    font-family: cursive;
`
export const Show = styled.div`
    font-size: 20px;
    font-family: cursive;
` 