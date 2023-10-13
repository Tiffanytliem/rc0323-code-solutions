import logo from './logo.svg';
import './App.css';
import CustomButton from './CustomButton.js';

function handleCustomClick(text){
  window.alert(text);
}

function App() {
  return (
    <div className="App">
      <CustomButton onCustomClick={handleCustomClick} color='Pink' text='Hello'></CustomButton>
      <CustomButton onCustomClick={handleCustomClick} color='Purple' text='React'></CustomButton>
      <CustomButton onCustomClick={handleCustomClick} color='Blue' text='JS'></CustomButton>
    </div>
  );
}

export default App;
