import styled from 'styled-components'

export const  CatWrapper = styled.div`
min-width: 400px;
flex:1;
margin: 3px;
height: 60vh;
 position: relative;
       @media(max-width: 760px){
         height: auto;
    }
            
 `
  export const Image = styled.img`
  width: 100%;
  object-fit: cover;
  height: 100%;
  /* max-height: 300px; */

        @media(max-width: 760px){
            width: 80%;
            object-fit: contain;
    }
  `

    export const CatContent = styled.div`
    width: 100%;
    height: 100%;
        position: absolute;
        top: 0;
    bottom: 0;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
color: skyblue;
gap: 1.5rem;
    `
  export const Header = styled.h2`
  text-transform: uppercase;
  font-size: 2rem;
  font-weight: 700;
  font-family: helvatica;
  text-align: center;
                 @media(max-width: 620px){
                    font-size: 1.2rem;
                
    }
    `
  export const Button = styled.button`
    padding: .7rem 1rem;
    background: white;
    border: none;
outline: none;
text-transform: uppercase;
cursor: pointer;
      @media(max-width: 760px){
         font-size: 20px;
    }
                 @media(max-width: 620px){
                   font-size: 15px;
    }
  `