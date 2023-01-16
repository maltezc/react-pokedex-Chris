import React from 'react'
import Pokecard from './Pokecard';

/** Pokedex: Display of all cards
 *
 * Props:
 * - pokemon: array of cards
 */

function Pokedex({ pokemon }) {
  return (
    <div>
      <h1>Pokedex</h1>
      <div>
        {pokemon.map(p => (
          <Pokecard
            id={p.id}
            name={p.name}
            type={p.type}
          />
        ))}
      </div>
    </div>
  );
}

export default Pokedex;