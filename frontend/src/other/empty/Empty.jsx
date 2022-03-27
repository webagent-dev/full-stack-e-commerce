import React from 'react'
import { EmptyContainer, Container, Image, Text, Back } from './empty.style'
function Empty() {
  return (
    <EmptyContainer>
        <Container>
          <Image  src='/assets/Search.gif' alt='empty gif'/>
          <Text>Your cart is Empty</Text>
          <Back>Click Here To Add Item</Back>
        </Container>
        </EmptyContainer>

  )
}

export default Empty