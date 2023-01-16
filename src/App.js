import React from 'react'
import Pokedex from './Pokedex';
import Pokelist from './Pokelist';

function App() {
  return (
    <div>
      <Pokedex pokemon={Pokelist}/>
    </div>
  );
}

export default App;