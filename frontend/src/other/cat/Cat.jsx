
import { CatWrapper, CatContent, Image, Header, Button } from './cat.style'

function Cat({item}) {
  return (
            <CatWrapper>  
  <Image  src={item.image} alt='cat__pic'/>
         < CatContent>
    < Header>  {item.title} </Header>
            < Button>Shop Now</ Button>
    </ CatContent>
      </CatWrapper>
  )
}

export default Cat;

//          <CatWrapper key={i}>  
//   <Image  src='/assets/image2.png' alt='cat__pic'/>
//          < CatContent>
//     < Header>   Long Shirt Wears </Header>
//             < Button>Shop Now</ Button>
//     </ CatContent>
//       </CatWrapper>
