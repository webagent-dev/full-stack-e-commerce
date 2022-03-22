
import './App.css'; 
import Container from './pages/Container'
import Products from './pages/Products'
import Single from './pages/Single'
import Cart from './pages/Cart'
import Register from './pages/Register'
import Login  from './pages/Login'
// import { useNavigate } from 'react-router-dom'
// import Pay from './comps/stripe-test/Pay'
// import Sucess from './comps/stripe-test/Sucess'
import  {createGlobalStyle } from 'styled-components'
import { Routes, Route} from 'react-router-dom'
const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
    list-style: none;
  }
  AppContainer{
  width: 100vw;
  background: lightgray;
  overflow: hidden; 
  background: red;
}
`
function App() {
  const user = true
  return (
   <div className="App">
      <GlobalStyle />
      <Routes>
              <Route path='/'  element={ <Container />} />
      <Route path='/products/:id'  element={  <Products /> } />
      <Route path='/item_desc/:id'  element={    <Single /> } />
      <Route path='/cart'  element={  user ?  <Cart /> : <Login /> } />
      <Route path='/register'  element={ <Register />} />
      <Route path='/login' element={ user ?  <Products /> :  <Login />} />
      </Routes>
  
    </div>
  );
}

export default App;
