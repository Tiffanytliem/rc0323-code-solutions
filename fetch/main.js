
async function logUsers() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    console.log(await response.json());
  } catch (err) {
    console.log(err);
  }
}

logUsers();

async function favePokemon() {
  try {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/5');
    console.log(await response.json());
  } catch (err) {
    console.log(err);
  }
}

favePokemon();
