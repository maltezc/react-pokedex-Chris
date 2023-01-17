import React from 'react'
import Pokedex from './Pokedex';
import Pokelist from './Pokelist';

/** Pokegame: shows two hands and determines a winner based on exp
 *
 * Props:
 * - pokemon
 */

function Pokegame({ pokemon=Pokelist }) {
  let firstHand = [];

  while (firstHand.length < 4) {
    const randomIndex = Math.floor(Math.random() * pokemon.length);
    const randomPokemon = pokemon.splice(randomIndex, 1)[0];
    firstHand.push(randomPokemon);
  }

  let secondHand = pokemon;

  const firstExperience = firstHand.reduce((exp, pokemon) => exp + pokemon.base_experience, 0);
  const secondExperience = secondHand.reduce((exp, pokemon) => exp + pokemon.base_experience, 0);

  return (
    <div>
      <Pokedex pokemon={firstHand} exp={firstExperience} isWinner={firstExperience > secondExperience} />
      <Pokedex pokemon={secondHand} exp={secondExperience} isWinner={secondExperience > firstExperience} />
    </div>
  )
}

export default Pokegame;