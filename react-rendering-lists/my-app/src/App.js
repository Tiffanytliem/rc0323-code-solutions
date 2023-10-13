import logo from './logo.svg';
import './App.css';
import PokemonList from './PokemonList.js';

function App() {
  const pokedex = [
    { number: '001', name: 'Bulbasaur' },
    { number: '004', name: 'Charmander' },
    { number: '007', name: 'Squirtle' },
    { number: '025', name: 'Pikachu' },
    { number: '039', name: 'Jigglypuff' }
  ];

  return (
    <div className="App">
      {PokemonList(pokedex)}
    </div>
  );
}

export default App;
