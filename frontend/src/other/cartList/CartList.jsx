
import { CartListContainer, Image,Content, Detail, Wrapper, Title, Value, Color, Other, Counter, Price, Show} from './cartlist.style'
import { FaMinus, FaPlus} from 'react-icons/fa'
 const CartList = () => {
    return (
        <CartListContainer>
         <Image src='/pro-4.jpg' alt='check_out' />
         <Content>
             <Detail>
                    <Wrapper>
                        <Title>Product:</Title>
                        <Value>The product Name</Value>
                    </Wrapper>
                    <Wrapper>
                        <Title>ID:</Title>
                        <Value>65956785982</Value>
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
                <Show>3</Show>
        <FaPlus  size='12px' />
            </Counter>
            <Price>$ 50</Price>
             </Other>
         </Content>
        </CartListContainer>
    )
}


export default CartList 