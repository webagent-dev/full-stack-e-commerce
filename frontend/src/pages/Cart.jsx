import React, { useState } from 'react';
import styled from 'styled-components'
import { Deal, Header, Carts, Footer}  from '../one'
const CartContainer = styled.div``
function Cart() {
    const [deal, setDeal] = useState(true)
  return (
      <CartContainer>
          <Header />
           {deal && <Deal  close={setDeal} /> }
           <Carts />
           <Footer />
      </CartContainer>
  )
}

export default Cart;
