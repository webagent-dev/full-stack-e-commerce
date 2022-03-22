
import { CartListContainer, Image,Content, Detail, Wrapper, Title, Value, Color, Other, Counter, Price, Show} from './cartlist.style'
import { FaMinus, FaPlus} from 'react-icons/fa'
 const CartList = ({data}) => {
     console.log(data)
    return (
        <CartListContainer>
         <Image src={data.product.photoURL} alt='check_out' />
         <Content>
             <Detail>
                    <Wrapper>
                        <Title>Product:</Title>
                        <Value>{data.product.name}</Value>
                    </Wrapper>
                    <Wrapper>
                        <Title>ID:</Title>
                        <Value>{data.product._id}</Value>
                    </Wrapper>
                    <Color />
                       <Wrapper>
                        <Title>Size</Title>
                        <Value>37.4</Value>
                    </Wrapper>
             </Detail>
             <Other>
            <Counter>
                <FaMinus  size='12px'/>
                <Show>{data.product.que}</Show>
        <FaPlus  size='12px' />
            </Counter>
            <Price>${data.price}</Price>
             </Other>
         </Content>
        </CartListContainer>
    )
}


export default CartList 