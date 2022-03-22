import React, { useState} from 'react';
import './header.style.js'
import {  FaAngleDown, FaSistrix, FaBars } from 'react-icons/fa'
import { GrCart} from 'react-icons/gr'
import Badge from '@mui/material/Badge';
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { getQuantity } from '../../feature/cartSlice'

import { HeaderContainer, 
    HeaderWrapper, 
    HeaderLang, Lang, 
    Search, SearchInput, HeaderLogo, 
    HeaderUser, Auth, 
    AuthBtn,LangText, LogoText,
    Toggle
}
     from './header.style'
function Header() {
    const [menu, setMenu] = useState(false)
    const num =   useSelector(getQuantity)
  return <HeaderContainer>
      <HeaderWrapper>
               <HeaderLang>
                   <Lang>
                       <LangText>EN</LangText>
                            <FaAngleDown />
                   </Lang>
                   < Search>
                       <SearchInput  type="text" placeholder='Search' />
                <FaSistrix />
                   </Search>
               </HeaderLang>
               <HeaderLogo>
                   <Link to='/'>
                    <LogoText>Shopy.</LogoText>
                    </Link>
               </HeaderLogo>
               <HeaderUser>
                   <Auth>
                       <AuthBtn>Register</AuthBtn>
                   </Auth>
                   <Auth>
                       <AuthBtn >Login</AuthBtn>
                   </Auth>
               </HeaderUser>
                  <Badge badgeContent={num} color="success">
                      <Link to='/cart'>
                <GrCart  size='25px'/>
                </Link>
        </Badge>
<Toggle>
    <FaBars size='25px' />
</Toggle>
      </HeaderWrapper>
  </HeaderContainer>;
}

export default Header;
