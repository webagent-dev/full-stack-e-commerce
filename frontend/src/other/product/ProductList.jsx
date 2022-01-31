import React from 'react';
import { ProductListContainer, ProductListWrapper, ImageWrapper, Image, ProductListContent, Icon } from './productList.style'
import { MdOutlineLocalGroceryStore, MdSearch, MdOutlineFavoriteBorder} from 'react-icons/md'
function ProductList({item}) {
  return(
      <ProductListContainer>
          <ProductListWrapper  />
                  <Image  src={item.image}/>
              <ProductListContent>
                  <Icon><MdOutlineLocalGroceryStore size='25px' /></Icon>
                  <Icon><MdSearch size='25px' /></Icon>
                  <Icon> <MdOutlineFavoriteBorder  size='25px'/></Icon>
              </ProductListContent>
      </ProductListContainer>
  )
}

export default ProductList;
