import './App.css'; 
import Container from './pages/Container'
import Products from './pages/Products'
import Single from './pages/Single'
import Cart from './pages/Cart'
import Register from './pages/Register'
import Login  from './pages/Login'
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
  return (
   <div className="App">
      <GlobalStyle />
      <Routes>
      <Route path='/'  element={ <Container />} />
      <Route path='/products'  element={    <Products /> } />
      <Route path='/products/:id'  element={    <Single /> } />
      <Route path='/cart'  element={    <Cart /> } />
      <Route path='/register'  element={    <Register /> } />
      <Route path='/login'  element={    <Login /> } />
      </Routes>
    </div>
  );
}

export default App;
