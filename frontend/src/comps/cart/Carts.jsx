import React from 'react';
import styled from 'styled-components'
import { CartContainer, CartWrapper, Head, Button, Title, Content, CartContent, Summary,Text,Underline,Detail, Price, Total, CartListWrapper} from './cart.style'
import { CartList } from '../../one'
import { useSelector } from 'react-redux'
import { getProduct } from '../../feature/cartSlice'
function Carts() {
  const cart = useSelector(getProduct)
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
            cart.map((item) =>(   <CartList key={item._id} data={item}/>))
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
