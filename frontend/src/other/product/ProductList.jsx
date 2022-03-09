import React, { useContext, useEffect } from 'react';
import { ProductListContainer, ProductListWrapper, ImageWrapper, Image, ProductListContent, Icon } from './productList.style'
import { MdOutlineLocalGroceryStore, MdSearch, MdOutlineFavoriteBorder} from 'react-icons/md'
import { Link, useLocation } from 'react-router-dom'
import { AppContext } from '../../context/Appcontext'
import axios from 'axios'
function ProductList({item}) {
const location = useLocation()
const {singleProduct, setSingleProduct } = useContext(AppContext)
const productId = location.pathname.split('/')[2]
useEffect(() => {
     const getSingleProduct = async () => {
         const res =  await axios.get(`http://localhost:8080/api/v1/product/main_product/${productId}`)
         console.log(res.data)
     }
     getSingleProduct()
},[productId])
  return(
      <ProductListContainer>
          <ProductListWrapper  />
                  <Image  src={item.image} alt={item.name} />
              <ProductListContent>
                  <Icon><MdOutlineLocalGroceryStore size='25px' /></Icon>
                  <Icon>
                      {/* <Link> */}
                      <MdSearch size='25px' />
                      {/* </Link> */}
                      </Icon>
                  <Icon> <MdOutlineFavoriteBorder  size='25px'/></Icon>
              </ProductListContent>
      </ProductListContainer>
  )
}

export default ProductList;
