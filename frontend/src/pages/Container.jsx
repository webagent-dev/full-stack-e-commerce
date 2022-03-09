import React, {useState,} from 'react';
import styled from 'styled-components'
import {Deal, Header, Slider, Product, Category, Newletter, Footer } from '../one'
const Containers = styled.div`
  width: 100%;
  overflow: hidden;
`
function Container() {
    const [deal, setDeal ] = useState(true)

  return (
  <Containers>
     {deal && <Deal  close={setDeal} /> }
      <Header />
      <Slider />
      <Category /> 
       <Product />
       <Newletter />
       <Footer />
  </Containers>
  )
}

export default Container;
