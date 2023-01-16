import React from "react";
import Pokecard from "./Pokecard";
import "./Pokedex.css";

/** Pokedex: Display of all cards
 *
 * Props:
 * - pokemon: array of cards
 */

function Pokedex({ pokemon }) {
  return (
    <div className="Pokedex">
      <h1 className="Pokedex-title">Pokedex</h1>
      <div className="Pokedex-cards">
        {pokemon.map((p) => (
          <Pokecard id={p.id} name={p.name} type={p.type} />
        ))}
      </div>
    </div>
  );
}

export default Pokedex;
