import './App.css'; 
import Container from './pages/Container'
import  {createGlobalStyle } from 'styled-components'

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
}
`
function App() {
  return (
   <div className="App">
      <GlobalStyle />
      <Container />
    </div>
  );
}

export default App;
