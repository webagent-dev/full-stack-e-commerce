import styled from 'styled-components'

 export const ProductListContent = styled.div`
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.2);
    position: absolute;
    top: 0;
    left: 0;
    z-index: 3;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    opacity: 0;
`

export const ProductListContainer = styled.div`
    flex: 1;
    min-width: 280px;
    height: 350px;
    overflow: hidden;
     /* background: rgb(189, 226, 233); */
    margin: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    border-radius: 5px;
      transition: all 5s  ease-in-out;
    cursor: pointer;
    &:hover  ${ProductListContent}{
        opacity: 1
    }
`
export const ProductListWrapper = styled.div`
    width: 200px;
    height: 200px;
    /* margin: auto; */
    background: lightgray;
    border-radius: 50%;
    position: absolute;
      &:hover{
      background: white;
  }
`
export const Image = styled.img`
width: 100%;
object-fit:  cover;
    height: 75%;
    border: none;
  z-index: 2;
    `
   

export const Icon  = styled.div`
width: 40px;
height: 40px;
background: white;
border-radius: 50%;
    transform: scale(1);
    padding: 10px;
    transition: all 0.5s linear;
    cursor: pointer;
&:hover{
    transform: scale(1.2);
}
`