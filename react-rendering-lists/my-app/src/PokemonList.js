export default function PokemonList (prop){
  return(
    <ul>
      {prop.map(pokemon => <li key={pokemon.number}>{pokemon.name}</li>)}
    </ul>
  );
}
