import React, {useState, useContext, useEffect} from 'react';
import { ProductContainer } from './product.style'
import { ProductList } from '../../one'
import { AppContext } from '../../context/Appcontext'
import axios from 'axios'
function Product() {
  const  { cat, filter, sort  } = useContext(AppContext)
  const [product, setProduct ] = useState([])
  const [filterProduct, setFilterProduct ] = useState([]) 

  useEffect(() => {
    const getProduct = async () => {
      const res =  await axios.get( cat ?
         `http://localhost:8080/api/v1/product/main_product?category=${cat}`
         : 'http://localhost:8080/api/v1/product/main_product'
      )
     setProduct(res.data)
    }
    getProduct()
  },[cat, setProduct])

  useEffect(() => {
    cat &&  setFilterProduct( 
       product && product.filter((item) => Object.entries( filter&& filter).every(([key, value]) => console.log('this is ', key, 'and this is', value)))
    )
  },[cat, product,filter])
  useEffect(() => {
    if((sort === 'newest')){
      setFilterProduct((prev) => {
       [...prev].sort((a, b) => a.createdAt - b.createdAt)
      })
    }else if((sort === 'asc')){
         setFilterProduct((prev) => {
       [...prev].sort((a, b) => a.price - b.price)
      })
    }else{
         setFilterProduct((prev) => {
       [...prev].sort((a, b) => b.price - a.price)
      })
    }
  },[sort, setFilterProduct])
  // console.log('this is product', product, 'this is filter product', filterProduct)
  return(
     <ProductContainer>
       {
        cat ? 
        filterProduct?.map((item) =>  <ProductList  item={item} key={filterProduct.id}/>)
        :
        product?.slice(0,8).map((item) =>  <ProductList  item={item} key={product.id}/>)
     }
  </ProductContainer>
  )
}

export default Product;
