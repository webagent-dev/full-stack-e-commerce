import React, { useState} from 'react';
import './header.css'
function Header() {
    const [menu, setMenu] = useState(false)
  return <div className='header__container'>
      <div className="header__wrapper">
               <div className="header_lang">
                   <div className="lang">
                       <h2>EN</h2>
                          +
                   </div>
                   <div className="search">
                       <input className='search__input' type="text" placeholder='Search' />
               
                           *

                   </div>
               </div>
               <div className="header__logo">
                    <h2>Shopy.</h2>
               </div>
               <div className="header__user">
                   <div className="auth">
                       <button className="auth__btn">Register</button>
                   </div>
                   <div className="auth">
                       <button className="auth__btn">Sign In</button>
                   </div>
                   <div className="cart">
                       <h3>cart</h3>
                   </div>
               </div>
      </div>
  </div>;
}

export default Header;
