import styled from 'styled-components'

export const SingleContainer = styled.div`
width: 100%;
height: 90vh;
padding: 20px;
margin-top: 2rem;
font-family: monospace;
                    @media(max-width: 620px){
                        height:  auto;
    }
`
export const SingleWrapper = styled.div`
    width: 90%;
    height: 100%;
     margin: 0 auto;
     display: flex;
     /* flex-wrap: wrap; */
     gap:2rem;
                    @media(max-width: 960px){
                        flex-direction: column;
    }
`
export const ImageWrapper = styled.div`
    width: 100%;
    flex: 1;

                  @media(max-width: 620px){
             flex: 2;
    }
`
export const Image = styled.img`
    width: 100%;
    object-fit: center;

        @media(max-width: 620px){
       object-fit: contain;
    }
`
export const SingleContent = styled.div`
    flex: 1;
    display: flex;
    gap: 1.5rem;
    flex-direction: column;
`
export const Title = styled.h1`
font-weight: 200!important;
`
export const Text = styled.div`
    line-height: 20px;
    font-size: 16px;
    font-weight: 500;
`
export const Price = styled.p`
    /* font-weight:  ; */
    font-family: cursive;
    font-size: 40px;
`
export const OtherContent = styled.div`
display: flex;
gap: 2rem;
margin-top: 1rem;
`

export const Select = styled.select`
    padding: 5px 10px;
    border: none;
    outline: none;
    border: 1px solid gray;
    border-radius: 4px;
`
export const Header = styled.h2``
export const Option = styled.option`` 
export const Color = styled.div`
width: 20px;
height: 20px;
border: 1px solid white;
background: ${props => props.bg};
border-radius: 50%;
` 
export const ColorWrapper = styled.div`
display: flex;
gap: .8rem;
`
export const Button  = styled.button`
    padding: 10px 20px;
    background: lightgray;
    border: none;
    outline: none;
    border: 1px solid gray;
    border-radius: 5px;
`
export const Show = styled.h3`
width: 25px;
height: 25px;
padding: 4px;
border: 1px solid gray;
border-radius: 8px;
text-align: center;
`
export const Counter = styled.div`
display: flex;
align-items: center;
gap: 1rem;
`