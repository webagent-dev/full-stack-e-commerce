import React from 'react';
import { CatContainer } from './category.style'
import { cat } from '../../data'
import { Cat } from '../../one'
function Category() {
  return (
  <CatContainer>
      {
        cat.map((item) => (
            <Cat  item={item} key={item.id} />
        ))
      }
  </CatContainer>
  )
}

export default Category;
