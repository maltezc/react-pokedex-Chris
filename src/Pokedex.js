import React from "react";
import Pokecard from "./Pokecard";
import "./Pokedex.css";

/** Pokedex: Display of all cards
 *
 * Props:
 * - pokemon: array of cards
 */

function Pokedex({ pokemon, exp, isWinner }) {
  return (
    <div className="Pokedex">
      <h1 className="Pokedex-title">Pokedex</h1>
      <div className="Pokedex-cards">
        {pokemon.map((p) => (
          <Pokecard id={p.id} name={p.name} type={p.type} exp={p.base_experience} />
        ))}
      </div>

      <h3>Total Experience: {exp}</h3>

      {isWinner ? 'THIS HAND WINS!' : null}
    </div>
  );
}
// react bootstrap
export default Pokedex;
