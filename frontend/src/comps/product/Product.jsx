import React from 'react';
import { ProductContainer } from './product.style'
import { product } from '../../data'
import { ProductList } from '../../one'
function Product() {

  return(
     <ProductContainer>
       {
         product.map((item) => (
            <ProductList  item={item} key={item.id}/>
         ))
     }
  </ProductContainer>
  )
}

export default Product;
