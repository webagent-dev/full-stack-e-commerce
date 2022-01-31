 import styled from 'styled-components'
 
 export const HeaderContainer   = styled.div`
     width: 100%;
    height: 50px;
    background: whitesmoke;
    display: flex;
    align-items: center;
 `
 export const HeaderWrapper = styled.div`
     width: 95%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    `
 export const HeaderLang    = styled.div`
     flex: 1;
    display: flex;
    align-items: center;
    gap: 2rem;
 `
 export const Lang  = styled.div`
     display: flex;
    align-items: center;
    gap: .5rem;
    `
    export const LangText = styled.h2`
            font-size: 12px;
    font-weight: 700;
    font-family: "Helvetica Neue";
    `
 export const Search    = styled.div`
     padding: 2px 5px;
    background: transparent;
    border: .2px solid lightgray;
    display: flex;
    align-items: center;
    border-radius: 3px;
 `
  export const SearchInput  = styled.input`
     width: 90%;
border: none;background: transparent;
outline: none;
  `
  export const HeaderLogo   = styled.div`
            flex: 2;
        text-align: center;
        font-family: monospace;
        font-weight: 800;
        font-size: 20px;
        text-shadow: -6px -6px -12px lightgray,inset 6px 6px 12px lightgray;
        cursor: pointer;
  `
  export const LogoText = styled.h2``
  export const HeaderUser   = styled.div`
         flex: 1;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        gap: 2rem;
        `
  export const Auth = styled.div`
  
  `
  export const AuthBtn  = styled.div`
      border: none;
    text-transform: uppercase;
    font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    padding: 3px 10px;
    background: transparent;
    cursor: pointer;
    `