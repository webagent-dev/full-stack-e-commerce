import styled from 'styled-components'
export const CartContainer = styled.div`
width: 100vw;
height: 90vh;
margin-top: .5rem;
padding: 20px;
 font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
     @media(max-width: 900px){
     height: auto;
    }
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

    @media(max-width: 900px){
      font-size: 20px;
    }
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
        @media(max-width: 900px){
      font-size: 12px;
       padding: 5px  10px;
        font-weight: 500;
    }
` 
export const Title = styled.h2`
  text-transform: capitalize;
    font-size: 20px;
    font-weight: 700;
    font-family: monospace;

    @media(max-width: 900px){
      font-size:  15px;
    }
` 
export const Content = styled.div`
display: flex;
gap: 1rem;
padding: 20px;
  @media(max-width: 900px){
      padding: 10px;
      text-align: center;
      gap: .5rem;

    }

    @media(max-width: 900px){
      flex-direction: column;
      width: 100%;
    }
` 
export const CartContent = styled.div`` 
export const Summary = styled.div`
  flex: 1;
  border: 1px solid gray;
  border-radius: 10px;
  padding: 20px;
  height: 300px;

  @media(max-width: 950px){
    height: auto;
    padding: 10px;
    width: 100%;
  }
`
export const Underline = styled.p`
  text-decoration: underline;
    text-transform: capitalize;
    font-weight: 700;
      @media(max-width: 900px){
      font-size: 8px;
    }
`

export const Detail = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
font-weight: 700;
padding: 10px;
`
export const  Price = styled.h3`
  /* font-size: 20px; */
  font-family: cursive;
  color: ${props => !props.text && 'gray'};
  font-size: ${props => props.text && '28px'};

      @media(max-width: 900px){
      font-size:  12px;
    }
`
export const Total = styled.h1`
   font-size: 30px;
    font-family: cursive;

          @media(max-width: 900px){
      font-size:  20px;
    }
`

export const CartListWrapper = styled.div`
  max-height: 60vh;
  flex: 2;
  display: flex;
  flex-direction: column;
  overflow: scroll;

  &::-webkit-scrollbar{
    display: none;
  }
`
