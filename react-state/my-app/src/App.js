// import logo from './logo.svg';
import './App.css';
import ToggleButton from './ToggleButton.js';

function App() {
  return (
    <div className="App">
  <ToggleButton text="Hello" color="green" />
    <ToggleButton text="React" color="blue" />
    <ToggleButton text="JS" color="pink" />
  </div>
  );
}

export default App;
