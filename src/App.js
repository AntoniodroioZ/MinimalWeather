import logo from './logo.svg';
import './components/styles/style.css';

// import './App.css';

// import Navbar from './components/Navbar';
import Nav from './components/Nav.js';
import CardWeather from './components/CardWeather.js';
import CardDaily from './components/CardDaily.js';

const element = (
  <div>
    <h1>Hola :D</h1>
  </div>
);

function App() {
  return (
    <div className="App">
      <Nav/>
      <div className='aling container'>
        <CardWeather/>
        <CardDaily/>
      
      </div>
    </div>
  );
}

export default App;
