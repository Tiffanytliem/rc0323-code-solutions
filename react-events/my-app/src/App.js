import logo from './logo.svg';
import './App.css';
import CustomButton from './CustomButton.js';
function App() {
  return (
    <div className="App">
      <CustomButton color='Pink' text='Hello'></CustomButton>
      <CustomButton color='Purple' text='React'></CustomButton>
      <CustomButton color='Blue' text='JS'></CustomButton>
    </div>
  );
}

export default App;
