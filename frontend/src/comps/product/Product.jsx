import React, { useState, useContext, useEffect} from 'react';
import { ProductContainer } from './product.style'
import { ProductList } from '../../one'
import { useLocation } from 'react-router-dom'
import { AppContext } from '../../context/Appcontext'
import axios from 'axios'
// const product = [1,2,3,4,5,]
function Product() {
  const { setCat, cat, filter, sort} = useContext(AppContext)
  const [filterProduct, setFilterProduct] = useState([])
  const [product, setProduct] = useState([])
  // const [ cat, setCat] = useState()
const location = useLocation()
  setCat( location.pathname.split('/')[2])
  useEffect(() => {
    const getProduct = async () => {
      const res = await axios.get( cat ?
         `http://localhost:8080/api/v1/product/main_product?category=${cat}`
      : 'http://localhost:8080/api/v1/product/main_product'
    )
        setProduct(res.data)
    }
    getProduct()
  },[cat])

  useEffect(() => {
    cat && setFilterProduct(product?.filter((item) => Object.entries(filter).every(([key, value]) => item[key].includes(value))))
  }, [cat, product, filter])

  useEffect(() => {
    if((sort === 'newest')){
        setFilterProduct((prev) => {
          [...prev].sort((a,b) => a.createdAt - b.createdAt)
        })
    }else if((sort === 'asc')){
      setFilterProduct((prev) => {
        [...prev].sort((a,b) => a.price - b.price)
      })
    }else{
        setFilterProduct((prev) => {
          [...prev].sort((a,b) => b.price - a.price)
        })
    }
  },[sort])
  return(
     <ProductContainer>
       {  
       cat ? 
        filterProduct?.map((item) =>  <ProductList item={item} />)
        :   product?.slice(0,8).map((item) =>  <ProductList item={item} />)
       
       }
  </ProductContainer>
  )
}

export default Product;
