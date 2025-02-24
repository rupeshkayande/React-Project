import logo from './logo.svg';
import './App.css';
import HomeComp from './Components/HomeComp';
import AboutComp from './Components/AboutComp';
import ContactComp from './Components/ContactComp';
import ProductComp from './Components/ProductComp';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <h2>App</h2>
      <HomeComp/>
      <AboutComp/>
      <ContactComp/>
      <ProductComp/>
    </div>
  );
}

export default App;
