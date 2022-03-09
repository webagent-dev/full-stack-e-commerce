import React,{ useState, useContext } from 'react';
import styled from 'styled-components'
import { Header, Deal, Newletter,Product, Footer, ListProduct } from '../one'
import { useLocation } from 'react-router-dom'
import { AppContext } from '../context/Appcontext'
const SingleProducts = styled.div`
`

function Products() {
    const [deal, setDeal] = useState(true)
    const location = useLocation()
    const { setCat } = useContext(AppContext)

setCat(location.pathname.split('/')[2])
    
  return(
       <SingleProducts>
           <Header />
         {deal && <Deal  close={setDeal} /> }
         <ListProduct  />
         <Product />
         < Newletter /> 
         <Footer />
    </SingleProducts>
  )
}

export default Products;
