import styled from 'styled-components'

export const CartListContainer = styled.div`
width: 100%;
height: 150px;
padding: 20px;
display: flex;
gap: 1rem;
border-bottom: 1px solid lightgray;
/* align-items: center; */

@media(max-width: 600px){
    /* height: auto; */
}
`


export const Image = styled.img`
    width: 250px;
    height:  100%;
    object-fit: contain;
flex: 1;
@media(max-width: 600px){
 flex: 2;
 height: 100%;
}
`
export const Content = styled.div`
    flex: 3;
    display: flex;
    /* align-items: center; */
    justify-content: space-between;

   @media(max-width: 600px){
       flex: 1;
       width: 100%;
    justify-content: space-between;
}

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

@media(max-width: 600px){
    font-size: 15px;
}
` 
export const Value = styled.div`
font-family: cursive;
color: gray;
@media(max-width: 600px){
    font-size: 10px;
}
` 
export const Color = styled.div`
    width: 30px;
    height: 30px;
border: 2px solid ${props => props.color};
background-color: ${props => props.color};
border-radius: 50%;
/* @media(max-width: 600px){
    width: 10px;
    height: 10px;
} */
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
    @media(max-width: 600px){
    font-size: 20px;
}
`
export const Show = styled.div`
    font-size: 20px;
    font-family: cursive;
    @media(max-width: 600px){
    font-size: 10px;
}
` 