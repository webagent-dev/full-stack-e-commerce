import React, { useContext} from 'react';
import { ProductListContainer, ProductListWrapper, ImageWrapper, Image, ProductListContent, Icon } from './productList.style'
import {MdOutlineLocalGroceryStore, MdSearch, MdOutlineFavoriteBorder, } from 'react-icons/md'
import { Link } from 'react-router-dom'
function ProductList({item}) {
console.log(item)
  return(
      <ProductListContainer>
          <ProductListWrapper  />
                  <Image  src={item?.photoURL} alt={item?.name} />
              <ProductListContent>
                  <Icon><MdOutlineLocalGroceryStore size='25px' /></Icon>
                  <Icon>
                      <Link to={`/item_desc/${item?._id}`}>
                      <MdSearch size='25px'  />
                      </Link>
                      </Icon>
                  <Icon> <MdOutlineFavoriteBorder  size='25px'/></Icon>
              </ProductListContent>
      </ProductListContainer>
  )
}

export default ProductList;
