import React, { useState} from 'react';
import './header.style.js'
import {  FaAngleDown, FaSistrix } from 'react-icons/fa'
import { GrCart} from 'react-icons/gr'
import Badge from '@mui/material/Badge';

import { HeaderContainer, 
    HeaderWrapper, 
    HeaderLang, Lang, 
    Search, SearchInput, HeaderLogo, 
    HeaderUser, Auth, 
    AuthBtn,LangText, LogoText
}
     from './header.style'
function Header() {
    const [menu, setMenu] = useState(false)
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
                    <LogoText>Shopy.</LogoText>
               </HeaderLogo>
               <HeaderUser>
                   <Auth>
                       <AuthBtn>Register</AuthBtn>
                   </Auth>
                   <Auth>
                       <AuthBtn >Sign In</AuthBtn>
                   </Auth>
                <Badge badgeContent={4} color="success">
                <GrCart  size='25px'/>
        </Badge>
               </HeaderUser>
      </HeaderWrapper>
  </HeaderContainer>;
}

export default Header;
