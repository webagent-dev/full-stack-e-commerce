import React,{ useState} from 'react';
import styled from 'styled-components'
import { Header, Deal, Newletter,Product, Footer, ListProduct } from '../one'
const SingleProducts = styled.div`
`
function Products() {
    const [deal, setDeal] = useState(true)
  return(
       <SingleProducts>
           <Header />
         {deal && <Deal  close={setDeal} /> }
         <ListProduct />
         <Product />
         < Newletter /> 
         <Footer />
    </SingleProducts>
  )
}

export default Products;
