import styled from 'styled-components'

export const  Container = styled.div`
    display: flex;
    font-family: monospace;
`
 export const First = styled.div`
flex: 1;
display: flex;
flex-direction: column;
padding: 20px;
 `

 export const Logo = styled.h1`
text-transform: uppercase;
 `
 export const Desc = styled.p`
 margin: 20px 0;
 text-transform: capitalize;
 font-size: 18px;
 ` 
 export const SocialContainer = styled.div`
    display: flex;
    gap: 1rem;
 `
 export const Social = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: ${props => props.color};
    display: flex;
    align-items: center;
    justify-content: center;
 `
//   Second Style 
 export const  Second = styled.div`
 flex: 1;
 padding: 20px;
`
export const Title = styled.h1`
margin-bottom: 30px;
text-transform: uppercase;
`
export const List = styled.ul`
margin: 0;
padding: 0;
list-style: none;
display: flex;
flex-wrap: wrap;
text-transform: capitalize;
`
export const Listitem = styled.li`
font-size: 20px;
width: 50%;
` 
 export const  Third = styled.div`
    flex: 1;
     padding: 20px;
 `

 export const Contactitem = styled.div`
 padding: 5px 0;
 `

 export const  Payment = styled.img`
 margin-top: 15px;`