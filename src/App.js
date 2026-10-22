import './App.css';
import Header from './components/Header.js';
import  Nav from './components/Nav' ;

function App(props) 
{
  return (
    <div className="App">
      <Header />
      <Nav navigation={props.navigation} />
    </div>
  );
}

export default App;
