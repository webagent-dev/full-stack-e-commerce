import React, {useState } from 'react';
import {Deal, Header, Slider, Product, Category } from '../one'
function Container() {
    const [deal, setDeal ] = useState(true)
  return <div className='Container'>
     {deal && <Deal  close={setDeal} /> }
      <Header />
      <Slider />
      <Category />
      <Product />
  </div>;
}

export default Container;
