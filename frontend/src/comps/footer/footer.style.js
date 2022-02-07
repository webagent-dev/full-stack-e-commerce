import styled from 'styled-components'

export const  Container = styled.div`
    display: flex;
    font-family: monospace;
    flex-wrap: wrap; 

      @media(max-width: 760px){
            align-items: center;
            justify-content: center;
    }
                 @media(max-width: 620px){
                    font-size: 40px;
                    flex-direction: column;
    }
`
 export const First = styled.div`
flex: 1;
display: flex;
flex-direction: column;
padding: 20px;
  @media(max-width: 760px){
      padding: 12px;
    }
                 @media(max-width: 620px){
                      padding: 8px;
    }
 `

 export const Logo = styled.h1`
text-transform: uppercase;

  @media(max-width: 760px){
   font-size: 40px;
    }
                 @media(max-width: 620px){
                     font-size: 30px;
    }
 `
 export const Desc = styled.p`
 margin: 20px 0;
 text-transform: capitalize;
 font-size: 18px;

   @media(max-width: 760px){
   font-size: 15px;
    margin: 10px 0;
    }
                 @media(max-width: 620px){
                     font-size: 12px;
                      margin: 5px 0;
    }
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

   @media(max-width: 760px){
      padding: 12px;
    }
                 @media(max-width: 620px){
                      padding: 8px;
    }
`
export const Title = styled.h1`
margin-bottom: 30px;
text-transform: uppercase;
  @media(max-width: 760px){
   font-size: 40px;
    }
                 @media(max-width: 620px){
                     font-size: 30px;
    }
`
export const List = styled.ul`
margin: 0;
/* padding: 10px; */
list-style: none;
display: flex;
flex-wrap: wrap;
text-transform: capitalize;
gap: 1rem;
@media(max-width: 760px){
    gap: .5rem;
    }
      
`
export const Listitem = styled.li`
flex: 1;
font-size: 20px;
align-items: center;
justify-content: center;
width: 50%;
  @media(max-width: 760px){
   font-size: 15px;
    }
                 @media(max-width: 620px){
                     font-size: 10px;
    }
` 
 export const  Third = styled.div`
    flex: 1;
     padding: 20px;

       @media(max-width: 760px){
      padding: 12px;
    }
                 @media(max-width: 620px){
                      padding: 8px;
    }
 `

 export const Contactitem = styled.div`
 padding: 5px 0;

   @media(max-width: 760px){
   font-size: 15px;
    }
                 @media(max-width: 620px){
                     font-size: 10px;
    }
 `

 export const  Payment = styled.img`
 margin-top: 15px;`