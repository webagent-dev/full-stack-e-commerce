import React from 'react';
import styled from 'styled-components'
import { CartContainer, CartWrapper, Head, Button, Title, Content, CartContent, Summary,Text,Underline } from './cart.style'
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
      </CartContainer>
  )
}

export default Carts;
