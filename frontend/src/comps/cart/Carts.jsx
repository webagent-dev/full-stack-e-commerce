import React from 'react';
import styled from 'styled-components'
import { CartContainer, CartWrapper, Head, Button, Title, Content, CartContent, Summary,Text,Underline,Detail, Price, Total, CartListWrapper} from './cart.style'
import { CartList } from '../../one'
const cart = [1,2,3,4,5,6,7,8]
function Carts() {
  return (
      <CartContainer>
        <Head>YOUR BAG</Head>
          <CartWrapper>
            <Button >CONTINUE SHOPPING</Button>
           < Content>
    <Underline>shopping (2) </Underline>
    <Underline>Your Wishlist (0)</Underline>
           </Content>
              <Button bg='black' text='white'>CHECKOUT NOW</Button>
          </CartWrapper>
          <Content>
            <CartListWrapper>
                {
            cart.map((item, i) =>(   <CartList key={i}/>))
          }
            </CartListWrapper>
        
            <Summary>
              <Head>ORDER SUMMERY</Head>
              <Detail>
        <Title>Subtotal</Title>
        <Price>$ 50.0</Price>
              </Detail>
              <Detail>
        <Title>Estimated Shipping</Title>
        <Price>$ 50.0</Price>
              </Detail>
              <Detail>
        <Title> Shipping Discount</Title>
        <Price>- $50.0</Price>
              </Detail>
              <Detail>
      <Total>Total </Total>
        <Price text='black'>$ 50.0</Price>
              </Detail>
            </Summary>
          </Content>
      </CartContainer>
  )
}

export default Carts;
